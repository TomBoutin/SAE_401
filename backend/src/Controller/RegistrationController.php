<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegistrationFormType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use App\Form\ChangeDetailsFormType;
use App\Entity\Watchlist;



class RegistrationController extends AbstractController
{
    #[Route('/register', name: 'app_register')]
    public function register(Request $request, UserPasswordHasherInterface $userPasswordHasher, EntityManagerInterface $entityManager): Response
    {
        $user = new User();
        $form = $this->createForm(RegistrationFormType::class, $user);
        $form->handleRequest($request);
    
        if ($form->isSubmitted() && $form->isValid()) {
            // encode the plain password
            $user->setPassword(
                $userPasswordHasher->hashPassword(
                    $user,
                    $form->get('plainPassword')->getData()
                )
            );
    
            // set the pseudo
            $user->setPseudo(
                $form->get('pseudo')->getData()
            );
    
            $entityManager->persist($user);
            $entityManager->flush();

            $watchlist = new Watchlist();
            $watchlist->setUser($user);
            $entityManager->persist($watchlist);
            $entityManager->flush();
    
            // do anything else you need here, like send an email
    
            // return $this->redirectToRoute('admin');
            return $this->redirect('http://localhost:8090/login');
        }
    
        return $this->render('registration/register.html.twig', [
            'registrationForm' => $form,
        ]);
    }

    #[Route('/change-password', name: 'app_change_password')]
    public function changeDetails(Request $request, UserPasswordHasherInterface $passwordHasher, EntityManagerInterface $entityManager): Response
{
    $user = $this->getUser();
    $form = $this->createForm(ChangeDetailsFormType::class, $user);

    $form->handleRequest($request);

    if ($form->isSubmitted() && $form->isValid()) {
        // Encode the new password
        $user->setPassword(
            $passwordHasher->hashPassword(
                $user,
                $form->get('plainPassword')->getData()
            )
        );

        // Update the email
        $user->setEmail(
            $form->get('email')->getData()
        );

        $entityManager->persist($user);
        $entityManager->flush();

        // Redirect to some route, change it to your needs
        return $this->redirectToRoute('app_home');
    }

    return $this->render('registration/changeDetails.html.twig', [
        'changeDetailsForm' => $form->createView(),
    ]);
}
}
