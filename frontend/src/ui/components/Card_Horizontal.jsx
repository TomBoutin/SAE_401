
import { Plus } from "../Icons/index.jsx";
// import { Moins } from "../Icons/index.jsx";

import Button from "./Button.jsx";

export default function Card_Horizontal({ className, id, name, realisateur, annee_sortie, affiche_horizontale}) {

  return (
    <div id={id} className={`${className} list-none group relative h-40 w-64 sm:h-52 sm:w-88 cursor-pointer before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-cardGradiant before:opacity-0 hover:before:opacity-100 font-openSans before:transform before:transition-all before:duration-200 duration-300 transition-all hover:outline outline-offset-1 outline-main z-3 hover:scale-105`}>
      <img src={`/img/${affiche_horizontale}`} alt="" className="h-40 sm:h-52 w-full object-cover z-1" />
      <div className="flex flex-col relative p-4 -translate-y-full text-white z-10 opacity-0 group-hover:opacity-100 transform transition-all duration-500 select-none">
        <p className="mb-2 font-bold text-xl sm:text-2xl break-words">{name}</p>
        <div className="flex justify-between items-center text-sm sm:text-base">
          <p className="overflow-hidden">{realisateur}</p>
          <p className="px-2 py-1 bg-main">{annee_sortie}</p>
        </div>
      </div>
      


    </div>
  )

}

