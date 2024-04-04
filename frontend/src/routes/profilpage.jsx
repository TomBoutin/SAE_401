import { useLoaderData, defer, Link, Outlet } from "react-router-dom";
// import { fetchProfileData } from "../lib/loaders";
import React, { useLayoutEffect } from 'react';
import { Profil } from '../ui/Icons/index.jsx'
import Button from "../ui/components/Button.jsx";
import CustomCarousel from "../ui/Carousel/CustomCarousel.jsx";
// import { fetchMoviesFeatured } from "../lib/loaders";
import { fetchWatchList } from "../lib/loaders";
import { getCookie, deleteCookie } from "../lib/utils.js";



export async function loader() {
  const user = JSON.parse(getCookie('user'));
  const dataWatchlistMovie = await fetchWatchList(user.id);
  return defer({ dataWatchlistMovie });
}

async function deleteWatchlist() {
  const user = JSON.parse(getCookie('user'));

  
  const response = await fetch(`http://localhost:8080/api/watchlist/user/${user.id}/delete`, {
    method: 'DELETE',
  });

  if (response.ok) {
    // Refresh the page or update the state to reflect the deleted watchlist
    window.location.reload();
    // console.log('Watchlist deleted');
  } else {
    console.error('Failed to delete watchlist');
  }

}

export default function ProfilPage() {
  const { dataWatchlistMovie } = useLoaderData();
  const user = JSON.parse(getCookie('user'));


  // console.log(dataWatchlistMovie);


  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="font-openSans mt-28 flex flex-col items-center justify-center">

        <Profil />

        <h2 className="text-center text-3xl font-bold mt-5 mb-3">
          Votre Profil
        </h2>

        <p className="text-lg mb-10">{user.pseudo}</p>


        <Link to="/">

          <Button intent={`primary`} className={`mb-5`}>
            Modifier
          </Button>
        </Link>



<Button intent={`primary`} className={`mb-8`} onClick={() => {
  deleteCookie('user');
  deleteCookie('token');
  window.location = '/';
}}>
  Se déconnecter
</Button>

        </section>

        {dataWatchlistMovie.movies && dataWatchlistMovie.movies.length > 0 && (
  <>
    <h3 className="text-2xl font-bold mt-6 mb-3 text-center">Votre Watchlist</h3>
    <section className="font-openSans flex flex-col items-center justify-center">
        <Button intent={`primary`} onClick={deleteWatchlist}>
          Supprimer la watchlist
        </Button>
    </section>

    <div className="px-7">
      <CustomCarousel data={dataWatchlistMovie.movies} cardType="horizontal" deviceType="desktop"/>
    </div>
  </>
)}

    </>
  );
}