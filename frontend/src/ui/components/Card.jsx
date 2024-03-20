
import { Plus } from "../Icons/index.jsx";
import { Moins } from "../Icons/index.jsx";


export default function Card({ id, name, realisateur, annee_sortie, image_vertical }) {

  return (
    <li id={id} className="list-none mt-24">
      <div className="w-88 aspect-video">
        <img src="/img/interstellar_horizontal.webp" alt="" className="object-cover"/>
        <div>
          <p>Interstellar</p>
          <div>
            <p>Christopher Nolan</p>
            <p>2014</p>
          </div>
        </div>
        <button>
          <Plus color="" />
        </button>

      </div>
    </li>
  )

}

