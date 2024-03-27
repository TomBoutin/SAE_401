import { useLoaderData, defer } from "react-router-dom";
import { fetchMovieData } from "../lib/loaders";

export async function loader({ params }) {
  const dataMovie = await fetchMovieData(params.filmName);
  return defer({ movie: dataMovie });
}

export default function Details() {
  const { movie } = useLoaderData();

  return (
    <section className="font-openSans">

      <div className="relative overflow-hidden h-140">
        <img src={`/img/${movie.affiche_horizontale}`} alt={`Affiche du film ${movie.name}`} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-DetailsGradiant"></div>
      </div>

      <div className="absolute top-80 left-10 w-1/2">
        <h1 className="font-bold text-4xl mb-4">{movie.name}</h1>
        <p className="">{movie.synopsis}</p>
        <p className="text-xl">{movie.realisateur}</p>

        <div>
          <p>Année de sortie: {movie.annee_sortie}</p>
          <p>Durée: {movie.duree}</p>
        </div>

      </div>

      <div>
      <iframe src={`${movie.trailer}`} title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen />
        
      </div>


    </section >



  );
}