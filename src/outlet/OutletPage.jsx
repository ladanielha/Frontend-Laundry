import { Outlet } from "react-router-dom"
import { Navbar } from "flowbite-react";
import { Footer } from "flowbite-react";

const OutletPage = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

export default OutletPage;