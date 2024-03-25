import NavBar from "../ui/NavBar";
import { Outlet } from "react-router-dom";
import Card_Horizontal from "../ui/components/Card_Horizontal";
import Card_Vertical from "../ui/components/Card_Vertical";
import Input from "../ui/components/Input";
import Button from "../ui/components/Button";
import Select from "../ui/components/Select";
import { fetchMovieData } from "../lib/loaders";
import { useLoaderData, defer } from "react-router-dom";

// export async function fetchMovieData(movie) {
//   let answer = await fetch(`http://localhost:8080/api/movie/${movie}`);
//   let data = await answer.json();
//   return data;
// }

export async function loader() {
  const dataMovie = await fetchMovieData(1);
  return defer (dataMovie);
}

export default function DesignSystem() {

  const data = useLoaderData();

  return (
    <>
      <section className="bg-black pt-24">
        <NavBar />
        <div className=" flex items-center justify-center gap-10">
          <Card_Horizontal {...data} />
          <Card_Vertical {...data} />
        </div>

        <div className="mt-10 text-center">
          <Input placeholder="Rechercher un film" className="mb-5" />
        </div>
        <div className="mt-10 text-center flex justify-center gap-6">
        <Button intent="primary" size="medium">
          Button
        </Button> 

        <Select categories={["Catégorie1", "Catégorie2", "Catégorie3", "Catégorie4"]} />
        </div>
        
      </section>
    </>
  );
}
