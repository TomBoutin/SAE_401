import { useLoaderData, defer } from "react-router-dom";
import { useState } from "react";
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
  const [selectedCategory, setSelectedCategory] = useState();
  const [searchValue, setSearchValue] = useState('');

  const handleSelectChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const selectedCategoryData = dataCategories.find(category => category.id === parseInt(selectedCategory));
  const moviesToDisplay = selectedCategoryData
    ? selectedCategoryData.movies.map(movie => {
        const fullMovieData = dataMovies.find(m => m.id === movie.id);
        return { ...movie, ...fullMovieData };
      })
    : dataMovies;

  const filteredMovies = moviesToDisplay.filter(movie => movie.name.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <>
      <section className="flex justify-center items-end max-w-full h-[30rem] bg-HeaderImage bg-cover bg-top">
        <Input placeholder="Rechercher un film" id="search-input" type="text" name="contenu" className="mb-5 w-80" onChange={handleSearchChange} />
      </section>

      <Select categories={dataCategories} onChange={handleSelectChange} className="ml-10"/>

      <ul className="mt-8 flex flex-wrap justify-center items-center gap-5 mx-5">
        {filteredMovies.map((movie) => (
          <Card_Horizontal key={movie.id} {...movie} />
        ))}
      </ul>
    </>
  );
}