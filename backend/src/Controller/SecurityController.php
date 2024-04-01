<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\HttpFoundation\Cookie;
use Symfony\Component\HttpFoundation\Session\SessionInterface;





class SecurityController extends AbstractController
{
    #[Route(path: '/login', name: 'app_login')]
    public function login(AuthenticationUtils $authenticationUtils, JWTTokenManagerInterface $JWTManager, SessionInterface $session): Response
    {
        // Récupérer l'éventuelle erreur de connexion
        $error = $authenticationUtils->getLastAuthenticationError();
    
        // Dernier nom d'utilisateur saisi par l'utilisateur
        $lastUsername = $authenticationUtils->getLastUsername();
    
        // Récupérer l'utilisateur connecté
        $user = $this->getUser();
    
        // Si l'utilisateur est connecté
        if ($user !== null) {
            // Générer un token JWT pour l'utilisateur connecté
            $token = $JWTManager->create($user);
    
            // Stocker le token dans un cookie
            $response = new Response();
            $response->headers->setCookie(new Cookie('jwt_token', $token, time() + 3600, '/', null, false, true));
    
            // Envoyer la réponse avec le cookie
            $response->send();
        }
    
        // Rendre la vue du formulaire de connexion avec les données nécessaires
        return $this->render('security/login.html.twig', [
            'last_username' => $lastUsername,
            'error' => $error,
        ]);
    }

    #[Route(path: '/logout', name: 'app_logout')]
    public function logout(): void
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }

    #[Route(path: '/api/user', name: 'api_user', methods: ['GET'])]
public function apiUser(): Response
{
    $user = $this->getUser();

    if (!$user) {
        return new JsonResponse(['error' => 'Not logged in'], 401);
    }

    return new JsonResponse([
        'username' => $user->getUsername(),
        // Add any other user information you need
    ]);
}
}