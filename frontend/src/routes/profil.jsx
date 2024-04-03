import { useLoaderData, defer, Link, Outlet } from "react-router-dom";
// import { fetchProfileData } from "../lib/loaders";
import React, { useLayoutEffect } from 'react';
import {Profil} from '../ui/Icons/index.jsx'
import Button from "../ui/components/Button.jsx";



// export async function loader({ params }) {
//   const dataProfile = await fetchProfileData(params.profilName);
//   return defer({ dataProfile });
// }

export default function Details() {
//   const { dataProfile } = useLoaderData();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="font-openSans mt-28 flex flex-col items-center justify-center">

        <Profil />

        <h2 className="text-center text-3xl font-bold mt-5 mb-10">
                Nom du profil
            </h2>


            <Link to="/">

                <Button intent={`primary`} className={`mb-8`}>
                    Modifier
                </Button>
            </Link>

            <Link to="/">
                <Button intent={`primary`}>
                    Supprimer l'historique
                </Button>
            </Link>

      </section >


    </>
  );
}