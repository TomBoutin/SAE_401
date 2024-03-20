
import { Plus } from "../Icons/index.jsx";
import { Moins } from "../Icons/index.jsx";


export default function Card({ id, name, realisateur, annee_sortie, image_vertical }) {

  return (
    <li id={id} className="list-none mt-24 group relative h-52 aspect-[8/5] z-3 transform transition-transform duration-100 cursor-pointer">
        <img src="/img/interstellar_horizontal.webp" alt="" className="h-52 aspect-[8/5] object-cover transition-outline duration-100 z-1"/>
        <div className="flex flex-col relative p-4 transform -translate-y-full text-white z-10 opacity-0 transition-opacity duration-100 group-hover:opacity-100">
          <p className="card__text-titre mb-2 font-bold">Interstellar</p>
          <div className="flex justify-between items-center">
            <p>Christopher Nolan</p>
            <p className="px-2 py-1 bg-main">2014</p>
          </div>
        </div>
        <button className="absolute top-2 right-2">
          <Plus color="" />
        </button>

    </li>
  )

}

