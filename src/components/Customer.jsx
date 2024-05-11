import { useState } from "react";
import GenerateId from "../utils/GenerateId";

const Customer = () => {
  const [customer, setCustomer] = useState("");
  return (
    <section className="bg-[#F7EEDD] dark:bg-gray-900">
      <div className="max-w-screen-md px-4 py-2 mx-auto lg:py-16 ">
        <h2 className="block mb-4 text-4xl font-extrabold tracking-tight text-center text-gray-900 dark:text-white">
          Customer
        </h2>
        <div className="divide-y-2 divide-black ">
          <div className="gap-5 my-5">
            <div className="block mb-5 text-lg font-medium text-gray-900 dark:text-gray-300">
              Create Customer
            </div>
            <div className="flex w-full gap-5 flex-direction-column">
              <div className="w-1/2">
                {" "}
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Customer Name
                </label>
                <input
                  type=""
                  id="itemName"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Input Customer Name"
                  required=""
                />
              </div>
              <div className="w-1/2">
                {" "}
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Created At
                </label>
                <input
                  type="date"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Input Date"
                  required=""
                />
              </div>
            </div>
            <div>
              <div className="flex w-full gap-5 pt-3 flex-direction-column">
                <div className="w-1/2">
                  {" "}
                  <label
                    htmlFor=""
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Code
                  </label>
                  <input
                    type="string"
                    value={GenerateId("CUS", 1)}
                    id=""
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Auto Generate"
                    required=""
                    disabled
                  />
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
                    type="number"
                    id="service"
                    className="disabled shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Input Service Name"
                    required=""
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-full gap-5 pt-5">
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

          <div className="gap-5 py-5 my-5">
            <div className="block mb-5 text-lg font-medium text-gray-900 dark:text-gray-300">
              Customer Detail
            </div>
            <div className="flex w-full gap-5 pb-5 flex-direction-column">
              <div className="w-1/2">
                {" "}
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Customer Name
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Input Customer Name"
                  required=""
                />
              </div>
              <div className="w-1/2">
                {" "}
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Page Limit
                </label>
                <form className="max-w-sm mx-auto">
                  <select
                    id="countries"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </form>
              </div>
            </div>
            <div className="flex w-full gap-5 flex-direction-column">
              {/* Buat Tabel */}

              <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
                <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400 ">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-center">
                        Customer Number
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Customer Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Service
                      </th>
                      <th scope="col" className="px-5 py-3 text-center">
                        Created At
                      </th>
                      <th scope="col" className="px-5 py-3 text-center">
                        Modified At
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Edit
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-center text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        001
                      </th>
                      <td className="px-6 py-4 text-center">Shirt</td>
                      <td className="px-6 py-4 text-center">15000</td>
                      <td className="px-6 py-4 text-center">Wash</td>
                      <td className="px-2 py-4 text-center">12-09-2003</td>
                      <td className="px-3 py-4 text-center">12-09-2003</td>
                      <td className="px-6 py-4 text-center">
                        <a
                          href="#"
                          className="font-medium text-colorPicker-biruBG hover:underline"
                        >
                          Edit
                        </a>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <a
                          href="#"
                          className="font-medium text-red-600 hover:underline"
                        >
                          Delete
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex justify-center gap-5 my-5">
              <a
                href="#"
                className="flex items-center justify-center h-10 px-4 text-base font-medium border me-3 text-colorPicker-krem bg-colorPicker-biruBG sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                <svg
                  className="w-3.5 h-3.5 me-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 5H1m0 0 4 4M1 5l4-4"
                  />
                </svg>
                Previous
              </a>
              <a
                href="#"
                className="flex items-center justify-center h-10 px-4 text-base font-medium border text-colorPicker-krem bg-colorPicker-biruBG sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Next
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customer;
