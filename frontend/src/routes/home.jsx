import { useLoaderData, defer} from "react-router-dom";
import NavBar from "../ui/NavBar";
import Card_Horizontal from "../ui/components/Card_Horizontal";
import Card_Vertical from "../ui/components/Card_Vertical";
import Input from "../ui/components/Input";
import Button from "../ui/components/Button";
import Select from "../ui/components/Select";
import { fetchMoviesData } from "../lib/loaders";

// export async function fetchMovieData(movie) {
//   let answer = await fetch(`http://localhost:8080/api/movie/${movie}`);
//   let data = await answer.json();
//   return data;
// }

export async function loader() {
  const dataMovie = await fetchMoviesData(1);
  return defer (dataMovie);
}

export default function Home() {

  const data = useLoaderData();

  return (
    <>
      <section>
        
      </section>
    </>
  );
}
