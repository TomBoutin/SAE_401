import NavBar from '../ui/NavBar';
import { Outlet } from 'react-router-dom';
import Card from '../ui/components/Card';


export default function Root() {

  return (
    <>
    <section>
      <NavBar />
      <Card />
      <Outlet />
      </section>
    </>
  );
}
