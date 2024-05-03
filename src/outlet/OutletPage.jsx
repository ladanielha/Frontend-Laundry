import { Outlet } from "react-router-dom"
import { Navbar } from "flowbite-react";
import { Footer } from "flowbite-react";

const OutletPage = () => {
  return (
    <>
      <Navbar/>
      <Outlet />
      <Footer />
    </>
  )
}

export default OutletPage;