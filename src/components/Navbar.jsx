import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

import { AiOutlinePoweroff } from "react-icons/ai";
import { FaBox, FaClipboardList } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import useJWT from "../libs/hooks/useJWT";
import { useContext } from "react";
import { ContextApplication } from "../libs/config/contexts";
import { redirect } from "react-router-dom";
import { CiCircleList } from "react-icons/ci";

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
    // <nav className="border-gray-200 bg-colorPicker-biruBG dark:bg-gray-900 dark:border-gray-700">
    //   <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
    //     <button
    //       disabled
    //       className="flex items-center space-x-3 rtl:space-x-reverse"
    //     >
    //       <img className=" h-15 w-15" src={logo} alt="logo"></img>
    //       <span className="self-center text-2xl font-semibold text-left whitespace-nowrap text-colorPicker-krem">
    //         Kucekan
    //         <br />
    //         Juara
    //       </span>
    //     </button>

    //     <div className="hidden w-full md:block md:w-auto" id="navbar-default">
    //       <div className="flex flex-col p-4 mt-4 font-bold border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-colorPicker-biruBG dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    //         <button
    //           onClick={() => navigate("/transaction")}
    //           className="flex items-center block gap-2 px-3 py-2 rounded text-colorPicker-krem hover:bg-colorPicker-krem md:px-5 md:hover:text-black dark:bg-blue-600 md:dark:bg-transparent"
    //           aria-current="page"
    //         >
    //           {" "}
    //           <FaClipboardList />
    //           Transaction
    //         </button>

    //         <button
    //           onClick={() => navigate("/item")}
    //           className="flex items-center block gap-2 px-3 py-2 rounded text-colorPicker-krem hover:bg-colorPicker-krem md:border-0 md:hover:text-black md:px-5 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    //         >
    //           {" "}
    //           <FaBox />
    //           Item
    //         </button>

    //         <button
    //           onClick={() => navigate("/customer")}
    //           className="flex items-center block gap-2 px-3 py-2 rounded text-colorPicker-krem hover:bg-colorPicker-krem md:border-0 md:hover:text-black md:px-5 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    //         >
    //           {" "}
    //           <MdPeopleAlt />
    //           Customer
    //         </button>

    //         <button
    //           type="submit"
    //           onClick={handleLogout}
    //           className="flex items-center gap-2 justify-center py-1 px-2 text-sm font-medium text-center text-gray-900 rounded-lg bg-[#ACE2E1] hover:text-white hover:bg-red-500 md:px-5 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
    //         >
    //           <AiOutlinePoweroff />
    //           Logout
    //         </button>
    //         {/* <button type="button" className="focus:outline-none text-black bg-colorPicker-logout hover:bg-green-100 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Logout
    //                 </button> */}
    //       </div>
    //       <button
    //         data-collapse-toggle="navbar-default"
    //         type="button"
    //         className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    //         aria-controls="navbar-default"
    //         aria-expanded="false"
    //       >
    //         <span className="sr-only">Open main menu</span>
    //         <svg
    //           className="w-5 h-5"
    //           aria-hidden="true"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 17 14"
    //         >
    //           <path
    //             stroke="currentColor"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth={2}
    //             d="M1 1h15M1 7h15M1 13h15"
    //           />
    //         </svg>
    //       </button>
    //     </div>
    //   </div>
    // </nav>
     <nav className="border-gray-200 bg-colorPicker-biruBG dark:bg-gray-900 font-family-[Poppins] sticky top-0 z-20">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <a
          href="/transaction"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold text-white whitespace-nowrap dark:text-white">
            Kucekin Juara
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm rounded-lg text-white-500 md:hidden hover:bg-white-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <button
                onClick={() => navigate("/transaction", { replace: true })}
                className="flex items-center block gap-2 px-3 py-2 rounded text-colorPicker-krem hover:bg-colorPicker-krem md:px-5 hover:text-black dark:bg-blue-600 md:dark:bg-transparent "
                aria-current="page"
              >
                {" "}
                <FaClipboardList />
                Transaction
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  navigate("/transaction/detail", { replace: true })
                }
                className="flex items-center block gap-2 px-3 py-2 rounded text-colorPicker-krem hover:bg-colorPicker-krem md:px-5 hover:text-black dark:bg-blue-600 md:dark:bg-transparent "
                aria-current="page"
              >
                {" "}
                <CiCircleList />
                List Transaction
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/item")}
                className="flex items-center block gap-2 px-3 py-2 rounded text-colorPicker-krem hover:bg-colorPicker-krem md:border-0 hover:text-black md:px-5 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                {" "}
                <FaBox />
                Service
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/customer")}
                className="flex items-center block gap-2 px-3 py-2 rounded text-colorPicker-krem hover:bg-colorPicker-krem md:border-0 hover:text-black md:px-5 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                {" "}
                <MdPeopleAlt />
                Customer
              </button>
            </li>
            <li>
              <button
                type="submit"
                onClick={handleLogout}
                className="flex items-center block gap-2 px-3 py-2 rounded text-colorPicker-krem hover:bg-red-500 md:border-0 hover:text-white md:px-5 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                <AiOutlinePoweroff />
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
