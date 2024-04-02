import NavBar from '../ui/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../ui/Footer/index.jsx';


export default function Root() {

  return (
    <>
    <section>
      <NavBar />
      <Outlet />

      <Footer/>

      </section>
    </>
  );
}
