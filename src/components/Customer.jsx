import { useNavigate } from "react-router-dom";
import useHTTP from "../libs/hooks/useHTTP";
import useJWT from "../libs/hooks/useJWT";
import { useEffect, useState } from "react";
import { PaginationData } from "../data/PaginationsData";
import { BASE_URL } from "../libs/config/settings";
import Pagination from "./widgets/Pagination";
import PageLimit from "./widgets/PageLimit";
import useChangeListener from "../libs/hooks/useChangeListener";
import useMessage from "../libs/hooks/useMessage";
import { axiosInstance } from "../libs/config/config";
import { CustomerInit } from "../data/CustomerData";
import axios from "axios";
import { FaCheck } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { IoTrashBin } from "react-icons/io5";
import Search from "./widgets/Search";
// import GenerateId from "../utils/GenerateId";

const Customer = () => {
  const navigate = useNavigate();
  const http = useHTTP();
  const jwt = useJWT();
  const onChangeListener = useChangeListener();
  const message = useMessage();

  const [customer, setCustomer] = useState(CustomerInit);
  const [daftarCustomer, setDaftarCustomer] = useState([]);
  const [paginateCustomer, setPaginateCustomer] = useState(PaginationData);

  const onCreateCustomer = () => {
    const url = `${BASE_URL}/customer/`;
    const config = {
      headers: {
        Authorization: jwt.get(),
      },
    };

    axios
      .post(url, customer, config)
      .then((response) => {
        message.success(response);
        navigate("/customer");
      })
      .catch((error) => {
        console.log(`apa error catch ? ${error}`);
        message.error(error);
      });
  };

  const onCustomerList = (page, search, limit = 2) => {
    const url = `${BASE_URL}/customer/`;
    const params = { page, limit, search };
    const config = {
      headers: {
        Authorization: jwt.get(),
      },
      params,
    };

    http.publicHTTP
      .get(url, config)
      .then((res) => {
        const { results, ...paginate } = res.data;
        setDaftarCustomer(results);
        setPaginateCustomer(paginate);
      })
      .catch((error) => {
        console.log(`apa error catch ? ${error}`);
        message.error(error);
      });
  };

  const onCustomerDelete = (_id) => {
    message.confirmRemove(() => {
      const url = `${BASE_URL}/customer/${_id}`;
      const config = {
        headers: {
          Authorization: jwt.get(),
        },
      };

      axios
        .delete(url, config)
        .then((response) => {
          message.success(response);
          navigate(-1);
        })
        .catch((error) => {
          message.error(error);
        });
    });
  };

  const onCustomerPaginate = (page) => {
    onCustomerList(page);
  };

  const onCustomerSearch = (search) => {
    onCustomerList(null, search);
  };

  const onCustomerLimit = (limit) => {
    onCustomerList(null, null, limit);
  };

  useEffect(() => {
    onCustomerList();
  }, []);

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
                  type="text"
                  name="name"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Customer Name"
                  value={customer.name}
                  onChange={(e) =>
                    onChangeListener.onChangeText(e, customer, setCustomer)
                  }
                  required=""
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
                  name="phonenumber"
                  value={customer.phonenumber}
                  onChange={(e) =>
                    onChangeListener.onChangeText(e, customer, setCustomer)
                  }
                  className="disabled shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Input Service Name"
                  required=""
                />
              </div>
            </div>
            <div className="flex items-center justify-center w-full gap-5 pt-5">
              <button
                onClick={onCreateCustomer}
                type="submit"
                className=" hover:text-white hover:bg-green-500 gap-2 flex items-center py-3 px-5 text-sm font-medium text-center text-gray-900 rounded-lg bg-[#41C9E2] sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                <FaCheck />
                Submit
              </button>
              <button
                onClick={() => navigate(-1)}
                className=" hover:text-white hover:bg-red-500 flex items-center gap-2 py-3 px-5 text-sm font-medium text-center text-gray-900 rounded-lg bg-[#ACE2E1] sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                <IoIosCloseCircle/>
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
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Search Customer
                </label>
                <Search callback={onCustomerSearch} />
              </div>
              <div className="w-1/2">
                <PageLimit callback={onCustomerLimit} />
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
                        Phone
                      </th>
                      <th scope="col" className="px-5 py-3 text-center">
                        Created At
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
                    {daftarCustomer.map((customer) => (
                      <tr
                        key={customer._id}
                        className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
                        >
                          {customer.code}
                        </th>
                        <td className="px-6 py-4 text-center">
                          {customer.name}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {customer.phonenumber}
                        </td>
                        <td className="px-2 py-4 text-center">
                          {
                            new Date(customer.createdAt)
                              .toISOString()
                              .split("T")[0]
                          }
                        </td>
                        <td className="px-6 py-4 text-center">
                          <button
                            onClick={() =>
                              navigate("detail", {
                                state: { _id: customer._id },
                              })
                            }
                            type="button"
                            className="rounded-full p-2 text-sm font-normal text-center text-gray-900 rounded-lg hover:bg-yellow-300 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                          >
                            <HiOutlinePencilAlt className='w-5 h-5 rounded-full'/>
                          </button>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <button className='rounded-full p-2 text-sm font-normal text-center text-gray-900 rounded-lg sm:w-fit hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
                                  onClick={() => onCustomerDelete(customer._id)}>
                                    <IoTrashBin className=' w-5 h-5 rounded-full'/>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <Pagination
              pagination={paginateCustomer}
              callback={onCustomerPaginate}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customer;
