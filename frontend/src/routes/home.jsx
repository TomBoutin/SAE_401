import { useLoaderData, defer, Link } from "react-router-dom";
import { useState, Suspense } from "react";
import NavBar from "../ui/NavBar";
import Card_Horizontal from "../ui/components/Card_Horizontal";
import Card_Vertical from "../ui/components/Card_Vertical";
import Input from "../ui/components/Input";
import Button from "../ui/components/Button";
import Select from "../ui/components/Select";
import { fetchCategoriesData, fetchMoviesData,  fetchMoviesFeatured, fetchWatchList } from "../lib/loaders";
import Card_HorizontalSkeleton from "../ui/components/Card_HorizontalSkeleton";
import { getCookie } from "../lib/utils";
import CustomCarousel from "../ui/Carousel/CustomCarousel.jsx";


export async function loader() {
  const dataMovies = await fetchMoviesData();
  const dataCategories = await fetchCategoriesData();
  const dataMoviesFeatured = await fetchMoviesFeatured();
  const userCookie = getCookie('user');
  let dataWatchlistMovie = [];

  if (userCookie) {
    const user = JSON.parse(userCookie);
    dataWatchlistMovie = await fetchWatchList(user.id);
  }

  return defer({ dataMovies, dataCategories, dataMoviesFeatured, dataWatchlistMovie });

}

export default function Home() {
  const { dataMovies, dataCategories, dataMoviesFeatured, dataWatchlistMovie } = useLoaderData();
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


      
      {searchValue === "" && (
      <>
      <h2 className="text-2xl font-bold ml-10 my-6">Films mis en avant</h2>
      <div className="mx-7">
        <CustomCarousel data={dataMoviesFeatured} cardType="vertical" watchlistData={dataWatchlistMovie}/>
      </div>
  </>
)}
<h2 className="text-2xl font-bold ml-10 mt-8">Tous les films</h2>


      <Select
        categories={dataCategories}
        onChange={handleSelectChange}
        className="ml-10 mt-10"
      />

<ul className="mx-5 my-8 flex flex-wrap items-center justify-center gap-5 ">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => {
            const isInWatchlist = dataWatchlistMovie.movies
              ? dataWatchlistMovie.movies.some(watchlistMovie => watchlistMovie.id === movie.id)
              : false;
            return (
              <li key={movie.id}>
                <Suspense fallback={<Card_HorizontalSkeleton />}>
                  <Link to={getCookie('user') ? `/details/${movie.id}` : '/login'}>
                    <Card_Horizontal {...movie} isInWatchlist={isInWatchlist} />
                  </Link>
                </Suspense>
              </li>
            );
          })
        ) : (
          <p className=" font-openSans my-10 text-xl text-center">Aucun film ne correspond à votre recherche</p>
        )}
      </ul>

      
    </>
  );
}
