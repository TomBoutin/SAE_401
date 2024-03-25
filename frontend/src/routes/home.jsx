import { useLoaderData, defer } from "react-router-dom";
import NavBar from "../ui/NavBar";
import Card_Horizontal from "../ui/components/Card_Horizontal";
import Card_Vertical from "../ui/components/Card_Vertical";
import Input from "../ui/components/Input";
import Button from "../ui/components/Button";
import Select from "../ui/components/Select";
import { fetchCategoriesData, fetchMoviesData } from "../lib/loaders";


export async function loader() {
  const dataMovies = await fetchMoviesData();
  const dataCategories = await fetchCategoriesData();
  return {dataMovies, dataCategories};
}

export default function Home() {

  const { dataMovies, dataCategories } = useLoaderData();

  return (
    <>
      <section className="flex justify-center items-end max-w-full h-[30rem] bg-HeaderImage bg-cover bg-top">
        <Input placeholder="Rechercher un film" id="search-input" type="text" name="contenu" className="mb-5 w-80" />
      </section>

      <Select categories={dataCategories} className="ml-10"/>

      <ul className="mt-8 flex flex-wrap justify-center items-center gap-5 mx-5">
      {dataMovies.map((movie) => (
          <Card_Horizontal key={movie.id} {...movie} />
        ))}
      </ul>

    </>
  );
}
