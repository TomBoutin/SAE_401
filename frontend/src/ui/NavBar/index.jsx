import {Link} from 'react-router-dom';
import Button from '../../ui/components/Button.jsx';


export default function NavBar() {
  // content: url('../../../assets/svg.r-1p0dtaibordernavright.svg');
  // position: absolute;
  // left: -25px;
  // transform: rotateY(180deg);
    return (
      <>
<nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between mx-auto max-w-screen-md py-3 bg-secondary px-12 before:content-[url('../../../public/img/NavBorder.png')] before:absolute before:-left-10 before:rotate-y-180 before:object-contain">
  <img src="../../../public/img/logo.png" alt="Logo" className="ml-4 h-8 md:h-10 cursor-pointer"/>

  <ul className="flex items-center gap-10">
    <li>
      <Link to="/about" className="text-white hover:text-main">About</Link>
    </li>
    <li>
      <Link to="/buy" className="text-white hover:text-main">Buy</Link>
    </li>
    <li>
      <Link to="/team" className="text-white hover:text-main">Our Team</Link>
    </li>
    <li>
      <Link to="/contact" className="text-white hover:text-main">Contact</Link>
    </li>
  </ul>

</nav>
</>
    );

}

