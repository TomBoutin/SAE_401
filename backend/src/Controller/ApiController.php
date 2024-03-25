<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use App\Entity\Movie;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Entity\Category;
use Doctrine\ORM\EntityManagerInterface;


class ApiController extends AbstractController
{
    #[Route('/api', name: 'app_api')]
    public function index(): Response
    {
        return $this->render('api/index.html.twig', [
            'controller_name' => 'ApiController',
        ]);
    }

    #[Route('/api/movie/{id}', name: 'app_api_movie')]
    public function readMovie(Movie $mov, SerializerInterface $serializer ): Response
    {
        // $serializer est un service de Symfony injecté dans la méthode readMovie
        // $data est la représentation serialisée/normalisée de l'entity $mov
        $data = $serializer->normalize($mov, null, ['groups' => 'json_movie']);
        // $response est une instance de JsonResponse qui hérite de Response
        // C'est la classe à utiliser lorsque l'on veut retourner du JSON
        // $data sera automatiquement encodé en JSON
        $response = new JsonResponse( $data );
        return $response;
    }

    #[Route('/api/category/{id}', name: 'app_api_category')]
    public function readCategory(Category $cat, SerializerInterface $serializer ): Response
    {
        // $serializer est un service de Symfony injecté dans la méthode readMovie
        // $data est la représentation serialisée/normalisée de l'entity $mov
        $data = $serializer->normalize($cat, null, ['groups' => 'json_category']);
        // $response est une instance de JsonResponse qui hérite de Response
        // C'est la classe à utiliser lorsque l'on veut retourner du JSON
        // $data sera automatiquement encodé en JSON
        $response = new JsonResponse( $data );
        return $response;
    }

    #[Route('/api/movies', name: 'app_api_movies')]
    public function readMovies(EntityManagerInterface $entityManager,SerializerInterface $serializer ): Response
    {
        $movies = $entityManager->getRepository(Movie::class)->findAll();
        $data = $serializer->normalize($movies, null, ['groups' => 'json_movie']);
        $response = new JsonResponse( $data );
        return $response;
    }

    #[Route('/api/categories', name: 'app_api_categories')]
    public function readCategories(EntityManagerInterface $entityManager,SerializerInterface $serializer ): Response
    {
        $categories = $entityManager->getRepository(Category::class)->findAll();
        $data = $serializer->normalize($categories, null, ['groups' => 'json_category']);
        $response = new JsonResponse( $data );
        return $response;
    }
 
}
