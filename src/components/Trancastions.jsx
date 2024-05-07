import { FiSearch } from "react-icons/fi";
import { BASE_URL } from "../libs/config/settings";
import useHTTP from "../libs/hooks/useHTTP";
import useJWT from "../libs/hooks/useJWT";
import useMessage from "../libs/hooks/useMessage";
import { useEffect, useState } from "react";
export default function Transactions() {
  const http = useHTTP();
  const jwt = useJWT();
  const message = useMessage();

  const [daftarCustomer, setDaftarCustomer] = useState([]);
  const onCustomerList = () => {
    const url = `${BASE_URL}/customer`;

    const config = {
      headers: {
        Authorization: jwt.get(),
      },
    };

    http.privateHTTP
      .get(url, config)
      .then((response) => {
        const { results } = response.results;
        console.log(results);
        setDaftarCustomer(response);
      })
      .catch((error) => {
        message.error(error);
      });
  };

  useEffect(() => {
    onCustomerList();
  }, []);

  return (
    <section className="bg-[#F7EEDD] dark:bg-gray-900">
      <div className="max-w-screen-md px-4 py-2 mx-auto lg:py-16 ">
        <h2 className="block mb-4 text-4xl font-extrabold tracking-tight text-center text-gray-900 dark:text-white">
          Transaction
        </h2>
        <div className="divide-y-2 divide-black ">
          <div className="gap-5 my-5">
            <div className="block mb-5 text-lg font-medium text-gray-900 dark:text-gray-300">
              Customer Detail
            </div>
            <div className="flex w-full gap-5 flex-direction-column">
              <div className="w-1/2">
                {" "}
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Customer Name
                </label>
                <div className="relative ">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <FiSearch />
                  </div>
                  <input
                    type="text"
                    id="input-group-1"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Name Customer"
                  />
                </div>
                {daftarCustomer != "" ? (
                  <div className="bg-gray-50 border divide-y-1 divide-black border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    {daftarCustomer.map((customer) => (
                      <div className="bg-gray-50   text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {customer.name}
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
              <div className="w-1/2">
                {" "}
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Phone Number
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Input Phone Number"
                  required=""
                  disabled
                />
              </div>
            </div>

            {/* Modal toggle */}
            <button
              data-modal-target="crud-modal"
              data-modal-toggle="crud-modal"
              className="my-3 py-3 px-5 text-sm font-medium text-center text-gray-900 rounded-lg bg-[#41C9E2] sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              type="button"
            >
              Add Customer
            </button>
            {/* Main modal */}
            <div
              id="crud-modal"
              tabIndex={-1}
              aria-hidden="true"
              className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
              <div className="relative w-full max-w-md max-h-full p-4">
                {/* Modal content */}
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  {/* Modal header */}
                  <div className="flex items-center justify-between p-4 border-b rounded-t md:p-5 dark:border-gray-600">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Create Customer
                    </h3>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 ms-auto dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-toggle="crud-modal"
                    >
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>
                  {/* Modal body */}
                  <form className="p-4 md:p-5">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="col-span-2">
                        <label
                          htmlFor="name"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Input Name Customer"
                          required=""
                        />
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <label
                          htmlFor="price"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          No Phone
                        </label>
                        <input
                          type="string"
                          name="phoneNumber"
                          id="phoneNumber"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Input No Handphone"
                          required=""
                        />
                      </div>
                      {/* <div className="col-span-2 sm:col-span-1">
                        <label
                          htmlFor="category"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Category
                        </label>
                        <select
                          id="category"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        >
                          <option selected="">Select category</option>
                          <option value="TV">TV/Monitors</option>
                          <option value="PC">PC</option>
                          <option value="GA">Gaming/Console</option>
                          <option value="PH">Phones</option>
                        </select>
                      </div>
                      <div className="col-span-2">
                        <label
                          htmlFor="description"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Product Description
                        </label>
                        <textarea
                          id="description"
                          rows={4}
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Write product description here"
                          defaultValue={""}
                        />
                      </div> */}
                    </div>
                    <button
                      type="submit"
                      className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <svg
                        className="w-5 h-5 me-1 -ms-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Add Customer
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="gap-5 py-5 my-5">
            <div className="block mb-5 text-lg font-medium text-gray-900 dark:text-gray-300">
              Item Detail
            </div>
            <div className="flex w-full gap-5 pb-5 flex-direction-column">
              <div className="w-1/2">
                {" "}
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Item Name
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Input Item Name"
                  required=""
                />
              </div>
              <div className="w-1/2">
                {" "}
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Service Name
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Input Service Name"
                  required=""
                />
              </div>
            </div>
            <div className="flex w-full gap-5 flex-direction-column">
              <div className="w-1/2">
                {" "}
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Quantiy
                </label>
                <input
                  type="number"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Input Quantity"
                  required=""
                />
              </div>
              <div className="w-1/2">
                {" "}
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Price
                </label>
                <input
                  type="email"
                  id="email"
                  className="disabled shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Input Price"
                  required=""
                />
              </div>
            </div>
            <button
              type="submit"
              className="my-3 py-3 px-5 text-sm font-medium text-center text-gray-900 rounded-lg bg-[#41C9E2] sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Calculate
            </button>
          </div>
        </div>
        <div className="gap-5 py-5 my-5 bg-[#ACE2E1] rounded-lg pl-2">
          <div className="block mb-5 text-lg font-medium text-gray-900 dark:text-gray-300">
            Summary
          </div>
          <div className="flex w-full gap-5 pb-5 flex-direction-row">
            <div className="w-1/2">
              {" "}
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Customer Name
              </label>
            </div>
            <div className="w-1/2">
              {" "}
              <label
                htmlFor="email"
                className="block mb-2 text-sm text-gray-900 dark:text-gray-300"
              >
                Budi
              </label>
            </div>
          </div>
          <div className="flex w-full gap-5 pb-5 flex-direction-row">
            <div className="w-1/2">
              {" "}
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Item Name
              </label>
            </div>
            <div className="w-1/2">
              {" "}
              <label
                htmlFor="email"
                className="block mb-2 text-sm text-gray-900 dark:text-gray-300"
              >
                Cuci Kiloean
              </label>
            </div>
          </div>
          <div className="flex w-full gap-5 pb-5 flex-direction-row">
            <div className="w-1/2">
              {" "}
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Total Price
              </label>
            </div>
            <div className="w-1/2">
              {" "}
              <label
                htmlFor="email"
                className="block mb-2 text-sm text-gray-900 dark:text-gray-300"
              >
                Rp. 500.000,-
              </label>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full gap-5">
          <button
            type="submit"
            className=" py-3 px-5 text-sm font-medium text-center text-gray-900 rounded-lg bg-[#41C9E2] sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Submit
          </button>
          <button
            type="submit"
            className=" py-3 px-5 text-sm font-medium text-center text-gray-900 rounded-lg bg-[#ACE2E1] sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Cancel
          </button>
        </div>
      </div>
    </section>
  );
}
