import { useLoaderData, defer } from "react-router-dom";
import { fetchMovieData, fetchCategorieData } from "../lib/loaders";
import React, { useLayoutEffect } from 'react';
import CustomCarousel from "../ui/Carousel/carousel.jsx";

export async function loader({ params }) {
  const dataMovie = await fetchMovieData(params.filmId);
  const dataCategories = await Promise.all(dataMovie.category.map(category => fetchCategorieData(category.id)));
  return defer({ movie: dataMovie, dataCategories });
}

export default function Details() {
  const { movie, dataCategories } = useLoaderData();

  const sameCategoryMovies = dataCategories.flatMap(category => category.movies).filter(m => m.id !== movie.id);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="font-openSans pb-10">

        <div className="relative overflow-hidden h-140">
          <img src={`/img/${movie.affiche_horizontale}`} alt={`Affiche du film ${movie.name}`} className="absolute inset-0 w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-DetailsGradiant"></div>
        </div>

        <div className="absolute top-80 left-10">
          <h1 className="font-bold text-2xl sm:text-4xl mb-4">{movie.name}</h1>
          <p className="text-xl sm:text-2xl">{movie.realisateur}</p>

          <div className="flex item-center gap-6 mt-6">
            <p className="px-2 py-1 bg-main">{movie.annee_sortie}</p>
            <p>{movie.duree}</p>
          </div>

        </div>
        <p className="ml-10 relative bottom-11 sm:bottom-16">{movie.synopsis}</p>

        <div>

          <h3 className="text-2xl font-bold ml-10 mb-6">
            Trailer
          </h3>

          <iframe src={`${movie.trailer}`} title="YouTube video player" frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen className="aspect-video w-4/5 h-4/5 mx-auto" />

        </div>

        {sameCategoryMovies.length > 0 && (
          <>
      <h3 className="text-2xl font-bold ml-10 my-6">Autres films similaires</h3>
      <div className="px-7">
        <CustomCarousel data={sameCategoryMovies} cardType="horizontal" />
      </div>
      </>
        )}


      </section >


    </>
  );
}