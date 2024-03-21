import NavBar from '../ui/NavBar';
import { Outlet } from 'react-router-dom';
import Card_Horizontal from '../ui/components/Card_Horizontal';


export default function Root() {

  return (
    <>
    <section>
      <NavBar />
      <Card_Horizontal />
      <Outlet />
      </section>
    </>
  );
}
