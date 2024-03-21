import NavBar from "../ui/NavBar";
import { Outlet } from "react-router-dom";
import Card_Horizontal from "../ui/components/Card_Horizontal";
import Card_Vertical from "../ui/components/Card_Vertical";

export default function DesignSystem() {
  return (
    <>
      <section className="bg-black pt-24">
        <NavBar />
        <div className=" flex items-center justify-center gap-10">
          <Card_Horizontal />
          <Card_Vertical />
        </div>



        <Outlet />
      </section>
    </>
  );
}
