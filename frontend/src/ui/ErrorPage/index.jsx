import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
    <div className="min-h-screen bg-dark flex flex-col justify-center items-center text-white text-center px-4">
      <h1 className="text-6xl font-bold mb-4 animate-bounce">Oops!</h1>
      <p className="text-2xl mb-4">Désolé, une erreur inattendue s'est produite.</p>
      <p className="text-lg mb-6 italic">{error.statusText || error.message}</p>
      <Link to="/" className="text-lg bg-main text-white px-6 py-2 rounded hover:bg-white hover:text-main transition-colors duration-200">
        Retour à l'accueil
      </Link>
    </div>
    </>
  );
}