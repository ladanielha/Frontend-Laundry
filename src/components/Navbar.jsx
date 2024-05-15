import { useNavigate } from "react-router-dom";
import logo from "../assets/logowhite.png";

import { AiOutlinePoweroff } from "react-icons/ai";
import { FaBox, FaClipboardList } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import useJWT from "../libs/hooks/useJWT";
import { useContext } from "react";
import { ContextApplication } from "../libs/config/contexts";

const Navbar = () => {
  const jwt = useJWT();

  const applcation = useContext(ContextApplication);

  const navigate = useNavigate();
  const handleLogout = () => {
    jwt.signOut();
    applcation.setIsAuthenticated(false);
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    navigate("/signin", { replace: true });
  };
  return (
    <nav className="border-gray-200 bg-colorPicker-biruBG dark:bg-gray-900 dark:border-gray-700">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <button
          disabled
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img className=" h-15 w-15" src={logo} alt="logo"></img>
          <span className="self-center text-2xl font-semibold text-left whitespace-nowrap text-colorPicker-krem">
            Kucekan
            <br />
            Juara
          </span>
        </button>

        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <div className="flex flex-col p-4 mt-4 font-bold border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-colorPicker-biruBG dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <button
              onClick={() => navigate("/transaction")}
              className="flex items-center gap-2 block px-3 py-2 rounded text-colorPicker-krem hover:bg-colorPicker-krem md:px-5 md:hover:text-black dark:bg-blue-600 md:dark:bg-transparent"
              aria-current="page"
            >
              {" "}
              <FaClipboardList />
              Transaction
            </button>

            <button
              onClick={() => navigate("/item")}
              className=" flex items-center gap-2 block px-3 py-2 rounded text-colorPicker-krem hover:bg-colorPicker-krem md:border-0 md:hover:text-black md:px-5 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              {" "}
              <FaBox />
              Item
            </button>

            <button
              onClick={() => navigate("/customer")}
              className=" flex items-center gap-2 block px-3 py-2 rounded text-colorPicker-krem hover:bg-colorPicker-krem md:border-0 md:hover:text-black md:px-5 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              {" "}
              <MdPeopleAlt />
              Customer
            </button>

            <button
              type="submit"
              onClick={handleLogout}
              className="flex items-center gap-2 justify-center py-1 px-2 text-sm font-medium text-center text-gray-900 rounded-lg bg-[#ACE2E1] hover:text-white hover:bg-red-500 md:px-5 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              <AiOutlinePoweroff />
              Logout
            </button>
            {/* <button type="button" className="focus:outline-none text-black bg-colorPicker-logout hover:bg-green-100 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Logout
                    </button> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
