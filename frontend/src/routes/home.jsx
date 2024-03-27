import { useLoaderData, defer, Link } from "react-router-dom";
import { useState, Suspense } from "react";
import NavBar from "../ui/NavBar";
import Card_Horizontal from "../ui/components/Card_Horizontal";
import Card_Vertical from "../ui/components/Card_Vertical";
import Input from "../ui/components/Input";
import Button from "../ui/components/Button";
import Select from "../ui/components/Select";
import { fetchCategoriesData, fetchMoviesData } from "../lib/loaders";
import Card_HorizontalSkeleton from "../ui/components/Card_HorizontalSkeleton";

export async function loader() {
  const dataMovies = await fetchMoviesData();
  const dataCategories = await fetchCategoriesData();
  return defer({ dataMovies, dataCategories });
}

export default function Home() {
  const { dataMovies, dataCategories } = useLoaderData();
  const [selectedCategory, setSelectedCategory] = useState();
  const [searchValue, setSearchValue] = useState("");

  const handleSelectChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const selectedCategoryData = dataCategories.find(
    (category) => category.id === parseInt(selectedCategory),
  );
  const moviesToDisplay = selectedCategoryData
    ? selectedCategoryData.movies.map((movie) => {
      const fullMovieData = dataMovies.find((m) => m.id === movie.id);
      return { ...movie, ...fullMovieData };
    })
    : dataMovies;

  const filteredMovies = moviesToDisplay.filter((movie) =>
    movie.name.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <>
      <section className="flex h-[30rem] max-w-full items-end justify-center bg-HeaderImage bg-cover bg-top">
        <Input
          placeholder="Rechercher un film"
          id="search-input"
          type="text"
          name="contenu"
          className="mb-5 w-80"
          onChange={handleSearchChange}
        />
      </section>

      <Select
        categories={dataCategories}
        onChange={handleSelectChange}
        className="ml-10"
      />

      <ul className="mx-5 mt-8 flex flex-wrap items-center justify-center gap-5">
        {filteredMovies.map((movie) => (
    <li key={movie.id}>
    <Suspense fallback={<Card_HorizontalSkeleton />}>
      <Link to={`/details/${movie.id}`}>
        <Card_Horizontal {...movie} />
      </Link>
    </Suspense>
  </li>
        ))}
      </ul>
    </>
  );
}
