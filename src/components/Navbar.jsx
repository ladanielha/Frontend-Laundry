import { useNavigate } from "react-router-dom";
import logo from "../assets/logowhite.png";
const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/signin", { replace: true });
  };
  return (
    <nav className="border-gray-200 bg-colorPicker-biruBG dark:bg-gray-900 dark:border-gray-700">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img className=" h-15 w-15" src={logo} alt="logo"></img>
          <span className="self-center text-2xl font-semibold text-left whitespace-nowrap text-colorPicker-krem">
            Kucekan
            <br />
            Juara
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col p-4 mt-4 font-bold border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-colorPicker-biruBG dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="/"
                className="block px-3 py-2 rounded text-colorPicker-krem hover:bg-colorPicker-krem md:p-0 md:hover:text-black dark:bg-blue-600 md:dark:bg-transparent"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between w-full px-3 py-2 rounded text-colorPicker-krem hover:bg-colorPicker-krem md:border-0 md:hover:text-black md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Transaction{" "}
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {/* Drop down menu */}
              <div
                id="dropdownNavbar"
                className="z-10 hidden font-normal divide-y divide-gray-100 rounded-lg shadow bg-colorPicker-biruBG w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-colorPicker-krem dark:hover:bg-gray-600 hover:text-black text-colorPicker-krem"
                    >
                      View Transaction
                    </a>
                  </li>
                  <li>
                    <a
                      href="/transaction"
                      className="block px-4 py-2 hover:bg-colorPicker-krem dark:hover:bg-gray-600 hover:text-black text-colorPicker-krem"
                    >
                      Make Transaction
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                href="/item"
                className="block px-3 py-2 rounded text-colorPicker-krem hover:bg-colorPicker-krem md:border-0 md:hover:text-black md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Item
              </a>
            </li>
            <li>
              <a
                href="/customer"
                className="block px-3 py-2 rounded text-colorPicker-krem hover:bg-colorPicker-krem md:border-0 md:hover:text-black md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Customer
              </a>
            </li>
            <li>
              <button
                type="submit"
                onClick={handleLogout}
                className=" py-1 px-2 text-sm font-medium text-center text-gray-900 rounded-lg bg-[#ACE2E1] sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Logout
              </button>
              {/* <button type="button" className="focus:outline-none text-black bg-colorPicker-logout hover:bg-green-100 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Logout
                    </button> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
