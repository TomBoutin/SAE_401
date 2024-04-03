import { useLoaderData, defer, Link, Outlet } from "react-router-dom";
// import { fetchProfileData } from "../lib/loaders";
import React, { useLayoutEffect } from 'react';
import { Profil } from '../ui/Icons/index.jsx'
import Button from "../ui/components/Button.jsx";
import CustomCarousel from "../ui/Carousel/CustomCarousel.jsx";
import { fetchMoviesFeatured } from "../lib/loaders";




export async function loader() {
  const dataMoviesFeatured = await fetchMoviesFeatured();
  return defer({ dataMoviesFeatured });
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

function deleteCookie(name) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}


export default function ProfilPage() {
  const { dataMoviesFeatured } = useLoaderData();
  const user = JSON.parse(getCookie('user'));


  // console.log(dataMoviesFeatured);


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

        <p className="text-lg mb-10">{user.email}</p>


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

        {dataMoviesFeatured.length > 0 && (
          <>
      <h3 className="text-2xl font-bold mt-6 mb-3 text-center">Historique</h3>
      <section className="font-openSans flex flex-col items-center justify-center">
        <Link to="/" className="mt-5">
          <Button intent={`primary`}>
            Supprimer l'historique
          </Button>
        </Link>
      </section>

      <div className="px-7">
        <CustomCarousel data={dataMoviesFeatured} cardType="horizontal" deviceType="desktop" />
      </div>
      
      </>
        )}

    </>
  );
}