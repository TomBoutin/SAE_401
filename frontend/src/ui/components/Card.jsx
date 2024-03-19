import { cva } from "class-variance-authority";

// Base definition
const base = "inline-flex";

const card = cva(base, {
  variants: { 
    intent: {
      horizontal: [

      ],
      vertical: [
        
      ],
    },
  },
  compoundVariants: [{ intent: "horizontal", class: "none" }],
  defaultVariants: {
    intent: "horizontal",
  },
});

function Card({ intent, className, ...rest }) {
    
return
    <li class="card" onclick='requestTrailer("{{film}}")'>
  <img src="../../assets/{{image-large}}" alt="" class="card__img" />
  <div class="card__text">
    <p class="card__text-titre display-8">{{titre}}</p>
    <div class="card__desc">
      <p class="card__text-name">{{réalisateur}}</p>
      <p class="card__text-date">{{annee_sortie}}</p>
    </div>
  </div>
  <img src="../../assets/Unionplus.svg" alt="" class="card__plus" onclick='addtoplaylist("{{film}}");event.stopPropagation();' />
</li>


}

export default function Card_View() {
  return (
    <ul className="grid h-screen place-content-center bg-black">
        <Card/>
    </ul>
  );
}
