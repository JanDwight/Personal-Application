import GroceryPriceList from "../../views/groceryPriceList";
import NavBar from "../core/navBar";
import SideBar from "../core/sideBar";

export default function DefaultLayout() {
  return (
    <>
    <NavBar />

    <div className="flex">
      <SideBar />

      <div className="w-full">
        <GroceryPriceList />
      </div>
    </div>
    </>
  )
}
