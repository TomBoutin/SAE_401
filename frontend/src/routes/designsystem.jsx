import NavBar from "../ui/NavBar";
import { Outlet } from "react-router-dom";
import Card_Horizontal from "../ui/components/Card_Horizontal";
import Card_Vertical from "../ui/components/Card_Vertical";
import Input from "../ui/components/Input";
import Button from "../ui/components/Button";
import Select from "../ui/components/Select";

export default function DesignSystem() {
  return (
    <>
      <section className="bg-black pt-24">
        <NavBar />
        <div className=" flex items-center justify-center gap-10">
          <Card_Horizontal />
          <Card_Vertical />
        </div>

        <div className="mt-10 text-center">
          <Input placeholder="Rechercher un film" className="mb-5" />
        </div>
        <div className="mt-10 text-center flex justify-center gap-6">
        <Button intent="primary" size="medium">
          Button
        </Button> 

        <Select categories={["Catégorie1", "Catégorie2", "Catégorie3", "Catégorie4"]} />
        </div>
        
        <Outlet />
      </section>
    </>
  );
}
