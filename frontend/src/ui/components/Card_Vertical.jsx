
import { Plus } from "../Icons/index.jsx";
import { Moins } from "../Icons/index.jsx";

import Button from "./Button.jsx";

export default function Card_Vertical({className, id, name, realisateur, annee_sortie, affiche_verticale }) {

  return (
    <div id={id} className={`${className} list-none group relative h-72 w-52 sm:h-88 sm:w-64 cursor-pointer before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-cardGradiant before:opacity-0 hover:before:opacity-100 font-openSans before:transform before:transition-all before:duration-200 duration-300 transition-all hover:outline outline-offset-1 outline-main z-3 hover:scale-105`}>
      <img src={`/img/${affiche_verticale}`} alt="" className=" h-72 sm:h-88 w-full object-cover z-1" />
      <div className="flex flex-col relative p-4 -translate-y-full text-white z-10 opacity-0 group-hover:opacity-100 transform transition-all duration-500 select-none">
        <p className="mb-2 font-bold text-2xl break-words">{name}</p>
        <div className="flex justify-between items-center">
          <p className="overflow-hidden">{realisateur}</p>
          <p className="px-2 py-1 bg-main">{annee_sortie}</p>
        </div>
      </div>


    </div>
  )

}

