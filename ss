[33mcommit 7c0c676d66ca2a6089b22753e101a6089da1f3a9[m
Author: TomBoutin <tomboutin.tom@gmail.com>
Date:   Wed Mar 27 17:54:21 2024 +0100

    detailsPage

[1mdiff --git a/README.md b/README.md[m
[1mindex 6956a91..e5edcf9 100644[m
[1m--- a/README.md[m
[1m+++ b/README.md[m
[36m@@ -35,7 +35,7 @@[m [mdocker-compose run --rm frontend npm install[m
 docker-compose run --rm backend composer install[m
 [m
 # Lance les migrations pour avoir une base de données fonctionnelle[m
[31m-docker-compose run --rm backend php bin/console doctrine:migrations:migrate --no-interaction[m
[32m+[m[32mdocker-compose run --rm backend phpcomment bin/console doctrine:migrations:migrate --no-interaction[m[41m[m
 ```[m
 [m
 ## Lancer l'environnement[m
[36m@@ -44,6 +44,6 @@[m [mdocker-compose up -d[m
 ```[m
 [m
 ## Liens[m
[31m-- Frontend : [http://localhost:8090](http://localhost:8090)[m
[31m-- Backend : [http://localhost:8080](http://localhost:8080)[m
[31m-- phpMyAdmin : [http://localhost:8070](http://localhost:8070)[m
\ No newline at end of file[m
[32m+[m[32m- Frontend : [http://localhost:8090][m[41m[m
[32m+[m[32m- Backend : [http://localhost:8080][m[41m[m
[32m+[m[32m- phpMyAdmin : [http://localhost:8070][m
\ No newline at end of file[m
[1mdiff --git a/backend/migrations/Version20240327114837.php b/backend/migrations/Version20240327114837.php[m
[1mnew file mode 100644[m
[1mindex 0000000..f7bd3bb[m
[1m--- /dev/null[m
[1m+++ b/backend/migrations/Version20240327114837.php[m
[36m@@ -0,0 +1,31 @@[m
[32m+[m[32m<?php[m
[32m+[m
[32m+[m[32mdeclare(strict_types=1);[m
[32m+[m
[32m+[m[32mnamespace DoctrineMigrations;[m
[32m+[m
[32m+[m[32muse Doctrine\DBAL\Schema\Schema;[m
[32m+[m[32muse Doctrine\Migrations\AbstractMigration;[m
[32m+[m
[32m+[m[32m/**[m
[32m+[m[32m * Auto-generated Migration: Please modify to your needs![m
[32m+[m[32m */[m
[32m+[m[32mfinal class Version20240327114837 extends AbstractMigration[m
[32m+[m[32m{[m
[32m+[m[32m    public function getDescription(): string[m
[32m+[m[32m    {[m
[32m+[m[32m        return '';[m
[32m+[m[32m    }[m
[32m+[m
[32m+[m[32m    public function up(Schema $schema): void[m
[32m+[m[32m    {[m
[32m+[m[32m        // this up() migration is auto-generated, please modify it to your needs[m
[32m+[m[32m        $this->addSql('ALTER TABLE movie ADD duree TIME NOT NULL');[m
[32m+[m[32m    }[m
[32m+[m
[32m+[m[32m    public function down(Schema $schema): void[m
[32m+[m[32m    {[m
[32m+[m[32m        // this down() migration is auto-generated, please modify it to your needs[m
[32m+[m[32m        $this->addSql('ALTER TABLE movie DROP duree');[m
[32m+[m[32m    }[m
[32m+[m[32m}[m
[1mdiff --git a/backend/migrations/Version20240327135846.php b/backend/migrations/Version20240327135846.php[m
[1mnew file mode 100644[m
[1mindex 0000000..178012d[m
[1m--- /dev/null[m
[1m+++ b/backend/migrations/Version20240327135846.php[m
[36m@@ -0,0 +1,31 @@[m
[32m+[m[32m<?php[m
[32m+[m
[32m+[m[32mdeclare(strict_types=1);[m
[32m+[m
[32m+[m[32mnamespace DoctrineMigrations;[m
[32m+[m
[32m+[m[32muse Doctrine\DBAL\Schema\Schema;[m
[32m+[m[32muse Doctrine\Migrations\AbstractMigration;[m
[32m+[m
[32m+[m[32m/**[m
[32m+[m[32m * Auto-generated Migration: Please modify to your needs![m
[32m+[m[32m */[m
[32m+[m[32mfinal class Version20240327135846 extends AbstractMigration[m
[32m+[m[32m{[m
[32m+[m[32m    public function getDescription(): string[m
[32m+[m[32m    {[m
[32m+[m[32m        return '';[m
[32m+[m[32m    }[m
[32m+[m
[32m+[m[32m    public function up(Schema $schema): void[m
[32m+[m[32m    {[m
[32m+[m[32m        // this up() migration is auto-generated, please modify it to your needs[m
[32m+[m[32m        $this->addSql('ALTER TABLE movie DROP duree');[m
[32m+[m[32m    }[m
[32m+[m
[32m+[m[32m    public function down(Schema $schema): void[m
[32m+[m[32m    {[m
[32m+[m[32m        // this down() migration is auto-generated, please modify it to your needs[m
[32m+[m[32m        $this->addSql('ALTER TABLE movie ADD duree TIME NOT NULL');[m
[32m+[m[32m    }[m
[32m+[m[32m}[m
[1mdiff --git a/backend/migrations/Version20240327140301.php b/backend/migrations/Version20240327140301.php[m
[1mnew file mode 100644[m
[1mindex 0000000..7898c4a[m
[1m--- /dev/null[m
[1m+++ b/backend/migrations/Version20240327140301.php[m
[36m@@ -0,0 +1,31 @@[m
[32m+[m[32m<?php[m
[32m+[m
[32m+[m[32mdeclare(strict_types=1);[m
[32m+[m
[32m+[m[32mnamespace DoctrineMigrations;[m
[32m+[m
[32m+[m[32muse Doctrine\DBAL\Schema\Schema;[m
[32m+[m[32muse Doctrine\Migrations\AbstractMigration;[m
[32m+[m
[32m+[m[32m/**[m
[32m+[m[32m * Auto-generated Migration: Please modify to your needs![m
[32m+[m[32m */[m
[32m+[m[32mfinal class Version20240327140301 extends AbstractMigration[m
[32m+[m[32m{[m
[32m+[m[32m    public function getDescription(): string[m
[32m+[m[32m    {[m
[32m+[m[32m        return '';[m
[32m+[m[32m    }[m
[32m+[m
[32m+[m[32m    public function up(Schema $schema): void[m
[32m+[m[32m    {[m
[32m+[m[32m        // this up() migration is auto-generated, please modify it to your needs[m
[32m+[m[32m        $this->addSql('ALTER TABLE movie ADD duree VARCHAR(20) NOT NULL');[m
[32m+[m[32m    }[m
[32m+[m
[32m+[m[32m    public function down(Schema $schema): void[m
[32m+[m[32m    {[m
[32m+[m[32m        // this down() migration is auto-generated, please modify it to your needs[m
[32m+[m[32m        $this->addSql('ALTER TABLE movie DROP duree');[m
[32m+[m[32m    }[m
[32m+[m[32m}[m
[1mdiff --git a/backend/migrations/Version20240327141955.php b/backend/migrations/Version20240327141955.php[m
[1mnew file mode 100644[m
[1mindex 0000000..953fbbf[m
[1m--- /dev/null[m
[1m+++ b/backend/migrations/Version20240327141955.php[m
[36m@@ -0,0 +1,31 @@[m
[32m+[m[32m<?php[m
[32m+[m
[32m+[m[32mdeclare(strict_types=1);[m
[32m+[m
[32m+[m[32mnamespace DoctrineMigrations;[m
[32m+[m
[32m+[m[32muse Doctrine\DBAL\Schema\Schema;[m
[32m+[m[32muse Doctrine\Migrations\AbstractMigration;[m
[32m+[m
[32m+[m[32m/**[m
[32m+[m[32m * Auto-generated Migration: Please modify to your needs![m
[32m+[m[32m */[m
[32m+[m[32mfinal class Version20240327141955 extends AbstractMigration[m
[32m+[m[32m{[m
[32m+[m[32m    public function getDescription(): string[m
[32m+[m[32m    {[m
[32m+[m[32m        return '';[m
[32m+[m[32m    }[m
[32m+[m
[32m+[m[32m    public function up(Schema $schema): void[m
[32m+[m[32m    {[m
[32m+[m[32m        // this up() migration is auto-generated, please modify it to your needs[m
[32m+[m[32m        $this->addSql('ALTER TABLE movie ADD synopsis LONGTEXT NOT NULL');[m
[32m+[m[32m    }[m
[32m+[m
[32m+[m[32m    public function down(Schema $schema): void[m
[32m+[m[32m    {[m
[32m+[m[32m        // this down() migration is auto-generated, please modify it to your needs[m
[32m+[m[32m        $this->addSql('ALTER TABLE movie DROP synopsis');[m
[32m+[m[32m    }[m
[32m+[m[32m}[m
[1mdiff --git a/backend/src/Controller/Admin/MovieCrudController.php b/backend/src/Controller/Admin/MovieCrudController.php[m
[1mindex ceb1f57..8236d94 100644[m
[1m--- a/backend/src/Controller/Admin/MovieCrudController.php[m
[1m+++ b/backend/src/Controller/Admin/MovieCrudController.php[m
[36m@@ -28,7 +28,8 @@[m [mclass MovieCrudController extends AbstractCrudController[m
         yield TextField::new('affiche_verticale');[m
         yield TextField::new('affiche_horizontale');[m
         yield TextField::new('trailer');[m
[31m-        [m
[32m+[m[32m        yield TextField::new('duree');[m[41m   [m
[32m+[m[32m        yield TextareaField::new('synopsis');[m
  [m
  [m
     } [m
[1mdiff --git a/backend/src/Entity/Movie.php b/backend/src/Entity/Movie.php[m
[1mindex da43534..45ced4f 100644[m
[1m--- a/backend/src/Entity/Movie.php[m
[1m+++ b/backend/src/Entity/Movie.php[m
[36m@@ -41,6 +41,12 @@[m [mclass Movie[m
     #[ORM\Column(type: Types::TEXT)][m
     private ?string $trailer = null;[m
 [m
[32m+[m[32m    #[ORM\Column(length: 20)][m
[32m+[m[32m    private ?string $duree = null;[m
[32m+[m
[32m+[m[32m    #[ORM\Column(type: Types::TEXT)][m
[32m+[m[32m    private ?string $synopsis = null;[m
[32m+[m
     public function __construct()[m
     {[m
         $this->category = new ArrayCollection();[m
[36m@@ -147,4 +153,29 @@[m [mclass Movie[m
         return $this;[m
     }[m
 [m
[32m+[m[32m    public function getDuree(): ?string[m
[32m+[m[32m    {[m
[32m+[m[32m        return $this->duree;[m
[32m+[m[32m    }[m
[32m+[m
[32m+[m[32m    public function setDuree(string $duree): static[m
[32m+[m[32m    {[m
[32m+[m[32m        $this->duree = $duree;[m
[32m+[m
[32m+[m[32m        return $this;[m
[32m+[m[32m    }[m
[32m+[m
[32m+[m[32m    public function getSynopsis(): ?string[m
[32m+[m[32m    {[m
[32m+[m[32m        return $this->synopsis;[m
[32m+[m[32m    }[m
[32m+[m
[32m+[m[32m    public function setSynopsis(string $synopsis): static[m
[32m+[m[32m    {[m
[32m+[m[32m        $this->synopsis = $synopsis;[m
[32m+[m
[32m+[m[32m        return $this;[m
[32m+[m[32m    }[m
[32m+[m
[32m+[m
 }[m
[1mdiff --git a/frontend/src/main.jsx b/frontend/src/main.jsx[m
[1mindex 4a4f0b0..65c78c6 100644[m
[1m--- a/frontend/src/main.jsx[m
[1m+++ b/frontend/src/main.jsx[m
[36m@@ -11,7 +11,7 @@[m [mimport DesignSystem from './routes/designsystem.jsx';[m
 import {loader as designsystemloader} from './routes/designsystem.jsx';[m
 import Home, {loader as homeLoader} from './routes/home.jsx';[m
 [m
[31m-import Details from './routes/details.jsx';[m
[32m+[m[32mimport Details, {loader as detailsLoader} from './routes/details.jsx';[m
 [m
 // import Buy from './routes/buy.jsx';[m
 // import { fetchPricingData } from './lib/loaders.js';[m
[36m@@ -27,10 +27,15 @@[m [mconst router = createBrowserRouter([[m
         loader: homeLoader,[m
       },[m
       {[m
[31m-        path: '/details/:filmId',[m
[32m+[m[32m        path: '/details/:filmName',[m
         element: <Details />,[m
[31m-        [m
[32m+[m[32m        loader: detailsLoader,[m
       },[m
[32m+[m[32m      {[m
[32m+[m[32m        path: '/team/:teamName',[m
[32m+[m[32m        element: <OurTeams />,[m
[32m+[m[32m        loader: OurTeamsLoader,[m
[32m+[m[32m      }[m
     ],[m
   },[m
   {[m
[1mdiff --git a/frontend/src/routes/details.jsx b/frontend/src/routes/details.jsx[m
[1mindex 386669d..632524a 100644[m
[1m--- a/frontend/src/routes/details.jsx[m
[1m+++ b/frontend/src/routes/details.jsx[m
[36m@@ -1,11 +1,45 @@[m
[32m+[m[32mimport { useLoaderData, defer } from "react-router-dom";[m[41m[m
[32m+[m[32mimport { fetchMovieData } from "../lib/loaders";[m[41m[m
 [m
[32m+[m[32mexport async function loader({ params }) {[m[41m[m
[32m+[m[32m  const dataMovie = await fetchMovieData(params.filmName);[m[41m[m
[32m+[m[32m  return defer({ movie: dataMovie });[m[41m[m
[32m+[m[32m}[m[41m[m
 [m
 export default function Details() {[m
[32m+[m[32m  const { movie } = useLoaderData();[m[41m[m
[32m+[m[41m[m
   return ([m
[31m-    <>[m
[31m-    <section>[m
[31m-    [m
[31m-    </section>[m
[31m-    </>[m
[32m+[m[32m    <section className="font-openSans">[m[41m[m
[32m+[m[41m[m
[32m+[m[32m      <div className="relative overflow-hidden h-140">[m[41m[m
[32m+[m[32m        <img src={`/img/${movie.affiche_horizontale}`} alt={`Affiche du film ${movie.name}`} className="absolute inset-0 w-full h-full object-cover" />[m[41m[m
[32m+[m[32m        <div className="absolute inset-0 bg-DetailsGradiant"></div>[m[41m[m
[32m+[m[32m      </div>[m[41m[m
[32m+[m[41m[m
[32m+[m[32m      <div className="absolute top-80 left-10 w-1/2">[m[41m[m
[32m+[m[32m        <h1 className="font-bold text-4xl mb-4">{movie.name}</h1>[m[41m[m
[32m+[m[32m        <p className="">{movie.synopsis}</p>[m[41m[m
[32m+[m[32m        <p className="text-xl">{movie.realisateur}</p>[m[41m[m
[32m+[m[41m[m
[32m+[m[32m        <div>[m[41m[m
[32m+[m[32m          <p>Année de sortie: {movie.annee_sortie}</p>[m[41m[m
[32m+[m[32m          <p>Durée: {movie.duree}</p>[m[41m[m
[32m+[m[32m        </div>[m[41m[m
[32m+[m[41m[m
[32m+[m[32m      </div>[m[41m[m
[32m+[m[41m[m
[32m+[m[32m      <div>[m[41m[m
[32m+[m[32m      <iframe src={`${movie.trailer}`} title="YouTube video player" frameborder="0"[m[41m[m
[32m+[m[32m        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"[m[41m[m
[32m+[m[32m        allowfullscreen />[m[41m[m
[32m+[m[41m        [m
[32m+[m[32m      </div>[m[41m[m
[32m+[m[41m[m
[32m+[m[41m[m
[32m+[m[32m    </section >[m[41m[m
[32m+[m[41m[m
[32m+[m[41m[m
[32m+[m[41m[m
   );[m
 }[m
\ No newline at end of file[m
[1mdiff --git a/frontend/src/routes/home.jsx b/frontend/src/routes/home.jsx[m
[1mindex ae87207..8da2d1f 100644[m
[1m--- a/frontend/src/routes/home.jsx[m
[1m+++ b/frontend/src/routes/home.jsx[m
[36m@@ -1,5 +1,5 @@[m
[31m-import { useLoaderData, defer } from "react-router-dom";[m
[31m-import { useState } from "react";[m
[32m+[m[32mimport { useLoaderData, defer, Link } from "react-router-dom";[m[41m[m
[32m+[m[32mimport { useState, Suspense } from "react";[m[41m[m
 import NavBar from "../ui/NavBar";[m
 import Card_Horizontal from "../ui/components/Card_Horizontal";[m
 import Card_Vertical from "../ui/components/Card_Vertical";[m
[36m@@ -7,19 +7,18 @@[m [mimport Input from "../ui/components/Input";[m
 import Button from "../ui/components/Button";[m
 import Select from "../ui/components/Select";[m
 import { fetchCategoriesData, fetchMoviesData } from "../lib/loaders";[m
[31m-[m
[32m+[m[32mimport Card_HorizontalSkeleton from "../ui/components/Card_HorizontalSkeleton";[m[41m[m
 [m
 export async function loader() {[m
   const dataMovies = await fetchMoviesData();[m
   const dataCategories = await fetchCategoriesData();[m
[31m-  return {dataMovies, dataCategories};[m
[32m+[m[32m  return defer({ dataMovies, dataCategories });[m[41m[m
 }[m
 [m
[31m-[m
 export default function Home() {[m
   const { dataMovies, dataCategories } = useLoaderData();[m
   const [selectedCategory, setSelectedCategory] = useState();[m
[31m-  const [searchValue, setSearchValue] = useState('');[m
[32m+[m[32m  const [searchValue, setSearchValue] = useState("");[m[41m[m
 [m
   const handleSelectChange = (event) => {[m
     setSelectedCategory(event.target.value);[m
[36m@@ -29,29 +28,50 @@[m [mexport default function Home() {[m
     setSearchValue(event.target.value);[m
   };[m
 [m
[31m-  const selectedCategoryData = dataCategories.find(category => category.id === parseInt(selectedCategory));[m
[32m+[m[32m  const selectedCategoryData = dataCategories.find([m[41m[m
[32m+[m[32m    (category) => category.id === parseInt(selectedCategory),[m[41m[m
[32m+[m[32m  );[m[41m[m
   const moviesToDisplay = selectedCategoryData[m
[31m-    ? selectedCategoryData.movies.map(movie => {[m
[31m-        const fullMovieData = dataMovies.find(m => m.id === movie.id);[m
[31m-        return { ...movie, ...fullMovieData };[m
[31m-      })[m
[32m+[m[32m    ? selectedCategoryData.movies.map((movie) => {[m[41m[m
[32m+[m[32m      const fullMovieData = dataMovies.find((m) => m.id === movie.id);[m[41m[m
[32m+[m[32m      return { ...movie, ...fullMovieData };[m[41m[m
[32m+[m[32m    })[m[41m[m
     : dataMovies;[m
 [m
[31m-  const filteredMovies = moviesToDisplay.filter(movie => movie.name.toLowerCase().includes(searchValue.toLowerCase()));[m
[32m+[m[32m  const filteredMovies = moviesToDisplay.filter((movie) =>[m[41m[m
[32m+[m[32m    movie.name.toLowerCase().includes(searchValue.toLowerCase()),[m[41m[m
[32m+[m[32m  );[m[41m[m
 [m
   return ([m
     <>[m
[31m-      <section className="flex justify-center items-end max-w-full h-[30rem] bg-HeaderImage bg-cover bg-top">[m
[31m-        <Input placeholder="Rechercher un film" id="search-input" type="text" name="contenu" className="mb-5 w-80" onChange={handleSearchChange} />[m
[32m+[m[32m      <section className="flex h-[30rem] max-w-full items-end justify-center bg-HeaderImage bg-cover bg-top">[m[41m[m
[32m+[m[32m        <Input[m[41m[m
[32m+[m[32m          placeholder="Rechercher un film"[m[41m[m
[32m+[m[32m          id="search-input"[m[41m[m
[32m+[m[32m          type="text"[m[41m[m
[32m+[m[32m          name="contenu"[m[41m[m
[32m+[m[32m          className="mb-5 w-80"[m[41m[m
[32m+[m[32m          onChange={handleSearchChange}[m[41m[m
[32m+[m[32m        />[m[41m[m
       </section>[m
 [m
[31m-      <Select categories={dataCategories} onChange={handleSelectChange} className="ml-10"/>[m
[32m+[m[32m      <Select[m[41m[m
[32m+[m[32m        categories={dataCategories}[m[41m[m
[32m+[m[32m        onChange={handleSelectChange}[m[41m[m
[32m+[m[32m        className="ml-10"[m[41m[m
[32m+[m[32m      />[m[41m[m
 [m
[31m-      <ul className="mt-8 flex flex-wrap justify-center items-center gap-5 mx-5">[m
[32m+[m[32m      <ul className="mx-5 mt-8 flex flex-wrap items-center justify-center gap-5">[m[41m[m
         {filteredMovies.map((movie) => ([m
[31m-          <Card_Horizontal key={movie.id} {...movie} />[m
[32m+[m[32m    <li key={movie.id}>[m[41m[m
[32m+[m[32m    <Suspense fallback={<Card_HorizontalSkeleton />}>[m[41m[m
[32m+[m[32m      <Link to={`/details/${movie.id}`}>[m[41m[m
[32m+[m[32m        <Card_Horizontal {...movie} />[m[41m[m
[32m+[m[32m      </Link>[m[41m[m
[32m+[m[32m    </Suspense>[m[41m[m
[32m+[m[32m  </li>[m[41m[m
         ))}[m
       </ul>[m
     </>[m
   );[m
[31m-}[m
\ No newline at end of file[m
[32m+[m[32m}[m[41m[m
[1mdiff --git a/frontend/src/ui/ErrorPage/index.jsx b/frontend/src/ui/ErrorPage/index.jsx[m
[1mindex 44e9f2f..6f6db23 100644[m
[1m--- a/frontend/src/ui/ErrorPage/index.jsx[m
[1m+++ b/frontend/src/ui/ErrorPage/index.jsx[m
[36m@@ -5,6 +5,7 @@[m [mexport default function ErrorPage() {[m
   console.error(error);[m
 [m
   return ([m
[32m+[m[32m    <>[m
     <div className="flex flex-col space-y-5 items-center my-20">[m
       <h1>Oops!</h1>[m
       <p>Sorry, an unexpected error has occurred.</p>[m
[36m@@ -12,5 +13,6 @@[m [mexport default function ErrorPage() {[m
         <i>{error.statusText || error.message}</i>[m
       </p>[m
     </div>[m
[32m+[m[32m    </>[m
   );[m
 }[m
\ No newline at end of file[m
[1mdiff --git a/frontend/src/ui/components/Card_Horizontal.jsx b/frontend/src/ui/components/Card_Horizontal.jsx[m
[1mindex 76f3a65..6ea312b 100644[m
[1m--- a/frontend/src/ui/components/Card_Horizontal.jsx[m
[1m+++ b/frontend/src/ui/components/Card_Horizontal.jsx[m
[36m@@ -7,7 +7,7 @@[m [mimport Button from "./Button.jsx";[m
 export default function Card_Horizontal({ id, name, realisateur, annee_sortie, affiche_horizontale}) {[m
 [m
   return ([m
[31m-    <li id={id} className="list-none group relative h-52 w-88 cursor-pointer before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-cardGradiant before:opacity-0 hover:before:opacity-100 font-openSans before:transform before:transition-all before:duration-200 duration-300 transition-all hover:outline outline-offset-1 outline-main z-3 hover:scale-105">[m
[32m+[m[32m    <div id={id} className="list-none group relative h-52 w-88 cursor-pointer before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-cardGradiant before:opacity-0 hover:before:opacity-100 font-openSans before:transform before:transition-all before:duration-200 duration-300 transition-all hover:outline outline-offset-1 outline-main z-3 hover:scale-105">[m[41m[m
       <img src={`/img/${affiche_horizontale}`} alt="" className="h-52 w-full object-cover z-1" />[m
       <div className="flex flex-col relative p-4 -translate-y-full text-white z-10 opacity-0 group-hover:opacity-100 transform transition-all duration-500 select-none">[m
         <p className="mb-2 font-bold text-2xl break-words">{name}</p>[m
[36m@@ -16,17 +16,10 @@[m [mexport default function Card_Horizontal({ id, name, realisateur, annee_sortie, a[m
           <p className="px-2 py-1 bg-main">{annee_sortie}</p>[m
         </div>[m
       </div>[m
[31m-      {/* <button className="absolute top-2 right-2">[m
[32m+[m[41m      [m
 [m
[31m-        <Plus color="" />[m
[31m-      </button> */}[m
 [m
[31m-      <Button intent="primary" size="small" className="opacity-0 group-hover:opacity-100 transition-opacity absolute top-2 right-2 z-10">[m
[31m-        <Plus color="" className="h-6 w-6"/>[m
[31m-      </Button>[m
[31m-[m
[31m-[m
[31m-    </li>[m
[32m+[m[32m    </div>[m[41m[m
   )[m
 [m
 }[m
[1mdiff --git a/frontend/src/ui/components/Card_HorizontalSkeleton.jsx b/frontend/src/ui/components/Card_HorizontalSkeleton.jsx[m
[1mnew file mode 100644[m
[1mindex 0000000..30c8c47[m
[1m--- /dev/null[m
[1m+++ b/frontend/src/ui/components/Card_HorizontalSkeleton.jsx[m
[36m@@ -0,0 +1,14 @@[m
[32m+[m[32mimport Skeleton from "react-loading-skeleton";[m[41m[m
[32m+[m[32mimport 'react-loading-skeleton/dist/skeleton.css';[m[41m[m
[32m+[m[41m[m
[32m+[m[32mexport default function Card_HorizontalSkeleton() {[m[41m[m
[32m+[m[41m[m
[32m+[m[32m  return ([m[41m[m
[32m+[m[32m    <li id={id} className="list-none group relative h-52 w-88 cursor-pointer z-3">[m[41m[m
[32m+[m[41m      [m
[32m+[m[32m      <Skeleton className="h-full object-cover" height="100%" />[m[41m[m
[32m+[m[32m    </li>[m[41m[m
[32m+[m[32m  )[m[41m[m
[32m+[m[41m[m
[32m+[m[32m}[m[41m[m
[32m+[m[41m[m
[1mdiff --git a/frontend/src/ui/components/Card_Vertical.jsx b/frontend/src/ui/components/Card_Vertical.jsx[m
[1mindex a9271a4..fe7d4ae 100644[m
[1m--- a/frontend/src/ui/components/Card_Vertical.jsx[m
[1m+++ b/frontend/src/ui/components/Card_Vertical.jsx[m
[36m@@ -17,10 +17,6 @@[m [mexport default function Card_Vertical({ id, name, realisateur, annee_sortie, aff[m
         </div>[m
       </div>[m
 [m
[31m-      <Button intent="primary" size="small" className="opacity-0 group-hover:opacity-100 transition-opacity absolute top-2 right-2 z-10">[m
[31m-        <Plus color="" className="h-6 w-6"/>[m
[31m-      </Button>[m
[31m-[m
 [m
     </li>[m
   )[m
[1mdiff --git a/frontend/tailwind.config.js b/frontend/tailwind.config.js[m
[1mindex 2a9d2bd..839d366 100644[m
[1m--- a/frontend/tailwind.config.js[m
[1m+++ b/frontend/tailwind.config.js[m
[36m@@ -27,6 +27,7 @@[m [mexport default {[m
         navBorder: "url('./public/img/NavBorder.png')",[m
         cardGradiant: "linear-gradient(180deg, rgba(22,15,15,0) 0%, #160F0F 100%)",[m
         HeaderImage: "linear-gradient(180deg, rgba(22,15,15,0) 0%,rgba(22,15,15,0) 45%, #160F0F 100%), url('/img/bg-image.webp')",[m
[32m+[m[32m        DetailsGradiant: "linear-gradient(180deg, rgba(22,15,15,0) 0%, #160F0F 100%)",[m
       },[m
       borderRadius: {[m
         DEFAULT: "var(--radius)",[m
[36m@@ -48,6 +49,7 @@[m [mexport default {[m
       },[m
       height: {[m
         88: "22rem",[m
[32m+[m[32m        140: "35rem",[m
       },[m
       [m
 [m
