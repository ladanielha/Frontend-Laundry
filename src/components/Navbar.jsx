import { useContext } from "react";
import useJWT from "../libs/hooks/useJWT";
import { ContextApplication } from "../libs/config/contexts";


const Navbar = () => {

  const jwt = useJWT()

  const applcation = useContext(ContextApplication);

  const logOut = () => {
    jwt.logOut();
    applcation.setIsAuthenticated(false);
  }

  return (
    <nav className="bg-colorPicker-biruBG border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-colorPicker-krem text-left">

            Kucekan
            <br />
            Juara
          </span>
        </button>

        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <div className="flex flex-col p-4 mt-4 font-bold border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-colorPicker-biruBG dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <button
              onClick={() => navigate("/transaction")}
              className="block px-3 py-2 rounded text-colorPicker-krem hover:bg-colorPicker-krem md:px-5 md:hover:text-black dark:bg-blue-600 md:dark:bg-transparent"
              aria-current="page"
            >
              Transaction
            </button>

            <button
              onClick={() => navigate("/item")}
              className="block px-3 py-2 rounded text-colorPicker-krem hover:bg-colorPicker-krem md:border-0 md:hover:text-black md:px-5 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Item
            </button>

            <button
              onClick={() => navigate("/customer")}
              className="block px-3 py-2 rounded text-colorPicker-krem hover:bg-colorPicker-krem md:border-0 md:hover:text-black md:px-5 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Customer
            </button>

            <button
              type="submit"
              onClick={handleLogout}
              className=" py-1 px-2 text-sm font-medium text-center text-gray-900 rounded-lg bg-[#ACE2E1] md:px-5 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Logout
            </button>
            {/* <button type="button" className="focus:outline-none text-black bg-colorPicker-logout hover:bg-green-100 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Logout

        </a>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
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
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col font-bold p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-colorPicker-biruBG dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="/transactionDetail"
                className="block py-2 px-3 text-colorPicker-krem hover:bg-colorPicker-krem md:p-0 md:hover:text-black dark:bg-blue-600 md:dark:bg-transparent"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between w-full py-2 px-3 text-colorPicker-krem rounded hover:bg-colorPicker-krem md:border-0 md:hover:text-black md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Transaction{" "}
            
              </button>
              {/* Drop down menu */}
              <div
                id="dropdownNavbar"
                className="z-10 hidden font-normal bg-colorPicker-biruBG divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >

              </div>
            </li>
            <li>
              <a
                href="/item"
                className="block py-2 px-3 text-colorPicker-krem rounded hover:bg-colorPicker-krem md:border-0 md:hover:text-black md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Item
              </a>
            </li>
            <li>
              <a
                href="/customer"
                className="block py-2 px-3 text-colorPicker-krem rounded hover:bg-colorPicker-krem md:border-0 md:hover:text-black md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Customer
              </a>
            </li>
            <li>
            <button onClick={logOut}
            type="submit"
            className=" py-1 px-2 text-sm font-medium text-center text-gray-900 rounded-lg bg-[#ACE2E1] sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Logout
          </button>
              {/* <button type="button" class="focus:outline-none text-black bg-colorPicker-logout hover:bg-green-100 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Logout

                    </button> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;