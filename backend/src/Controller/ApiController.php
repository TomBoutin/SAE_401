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
use App\Entity\User;
use App\Repository\WatchlistRepository;
use App\Entity\Watchlist;


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

    #[Route('/api/movies/featured', name: 'app_api_movies_featured')]
    public function getFeaturedMovies(EntityManagerInterface $entityManager, SerializerInterface $serializer): Response
    {
        $movies = $entityManager->getRepository(Movie::class)->findBy(['mis_en_avant' => true]);
        $data = $serializer->normalize($movies, null, ['groups' => 'json_movie']);
        $response = new JsonResponse($data);
        return $response;
    }

    #[Route('/api/watchlist/user/{id}', name: 'app_api_user_watchlists', methods: ['GET'])]
public function getUserWatchlist(int $id, WatchlistRepository $watchlistRepository, SerializerInterface $serializer): Response
{
    $watchlist = $watchlistRepository->findOneBy(['user' => $id]);

    if (!$watchlist) {
        return $this->json(['message' => 'No watchlist found for this user'], 404);
    }

    $data = $serializer->normalize($watchlist, null, [
        'groups' => 'json_watchlist',
        'circular_reference_handler' => function ($object) {
            return $object->getId();
        }
    ]);

    return new JsonResponse($data);
}

#[Route('/api/watchlist/user/{id}/delete', name: 'app_api_user_watchlist_delete', methods: ['DELETE'])]
public function deleteUserWatchlist(int $id, EntityManagerInterface $entityManager): Response
{
    $watchlistRepository = $entityManager->getRepository(Watchlist::class);
    $watchlist = $watchlistRepository->findOneBy(['user' => $id]);

    if (!$watchlist) {
        return $this->json(['message' => 'No watchlist found for this user'], 404);
    }

    foreach ($watchlist->getMovies() as $movie) {
        $watchlist->removeMovie($movie);
    }

    $entityManager->persist($watchlist);
    $entityManager->flush();

    return $this->json(['message' => 'Watchlist cleared successfully']);
}

#[Route('/api/watchlist/user/{userId}/movie/{movieId}/add', name: 'app_api_user_watchlist_add_movie', methods: ['POST'])]
    public function addMovieToUserWatchlist(int $userId, int $movieId, EntityManagerInterface $entityManager): Response
    {
        $userRepository = $entityManager->getRepository(User::class);
        $movieRepository = $entityManager->getRepository(Movie::class);
        $watchlistRepository = $entityManager->getRepository(Watchlist::class);

        $user = $userRepository->find($userId);
        $movie = $movieRepository->find($movieId);
        $watchlist = $watchlistRepository->findOneBy(['user' => $userId]);

        if (!$user || !$movie || !$watchlist) {
            return $this->json(['message' => 'User, movie or watchlist not found'], 404);
        }

        // Add the movie to the watchlist
        $watchlist->addMovie($movie);

        $entityManager->flush();

        return $this->json(['message' => 'Movie added to watchlist successfully']);
    }
    
    

}
