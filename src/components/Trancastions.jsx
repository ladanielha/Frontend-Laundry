import { FiSearch } from "react-icons/fi";
import { BASE_URL } from "../libs/config/settings";
import useHTTP from "../libs/hooks/useHTTP";
import useJWT from "../libs/hooks/useJWT";
import useMessage from "../libs/hooks/useMessage";
import { useEffect, useRef, useState } from "react";
import { PaginationData } from "../data/PaginationsData";
import { axiosInstance } from "../libs/config/config";
import useFormatter from "../libs/hooks/useFormatter";
import { TransactionInit } from "../data/TransactionData";
import { CustomerInit } from "../data/CustomerData";
import { ItemInit } from "../data/ItemData";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import PageLimit from "./widgets/PageLimit";
import Pagination from "./widgets/Pagination";
import { AdminInit } from "../data/AdminData";
import useChangeListener from "../libs/hooks/useChangeListener";
import { IoIosCloseCircle } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { TbReload } from "react-icons/tb";
export default function Transactions() {
  const jwt = useJWT();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTermItem, setSearchTermItem] = useState("");
  const [searchItem, setSearchItem] = useState([]);
  const [item, setItem] = useState(ItemInit);
  const [customer, setCustomer] = useState(CustomerInit);
  const [admin, setAdmin] = useState(AdminInit);
  const [transaction, setTransaction] = useState(TransactionInit);
  const [onName, setOnName] = useState("");
  const [onPhone, setOnPhone] = useState("");
  const [onNameItem, setNameItem] = useState("");
  const [onService, setOnService] = useState("");
  const [onPrice, setOnPrice] = useState("");
  const [daftarCustomer, setDaftarCustomer] = useState([]);
  const [daftarItem, setDaftarItem] = useState([]);
  const [daftarTransaction, setDaftarTransaction] = useState([]);
  const [daftarAdmin, setDaftarAdmin] = useState([]);
  const [searchCustomer, setSearchCustomer] = useState([]);
  const [paginateTransaction, setPaginateTrasaction] = useState(PaginationData);
  const [customerAdd, setCustomerAdd] = useState(CustomerInit);
  const [count, setCount] = useState(0);
  const onChangeListener = useChangeListener();
  const message = useMessage();
  const navigate = useNavigate();
  const http = useHTTP();

  // let text = "TRX";
  // let code = `${text}-${(count + 1).toString().padStart(6 - text.length, "0")}`;
  const formatCurrency = (data) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(data);
  };
  const onCreateCustomer = () => {
    try {
      const url = `${BASE_URL}/customer/`;
      const config = {
        headers: {
          Authorization: jwt.get(),
        },
      };

      axiosInstance
        .post(url, customerAdd, config)
        .then((response) => {
          message.success(response);
        })
        .catch((error) => {
          console.log(`apa error catch ? ${error}`);
          message.error(error);
        });
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Error Add Customer",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const onCustomerList = async () => {
    await axiosInstance
      .get("/customer", {
        headers: {
          Authorization: jwt.get(),
        },
      })
      .then((res) => {
        setDaftarCustomer(res.data.results);
        navigate("/transaction");
      })
      .catch((error) => {
        console.log(`apa error catch ? ${error}`);
      });
  };
  // const onTransactionList = (page, search, limit = 2) => {
  //   const params = { page, limit, search };
  //   axiosInstance
  //      .get("/transaction/", {
  //        headers: {
  //          Authorization: jwt.get(),
  //          params,
  //        },
  //      })
  //      .then((res) => {
  //        const { ...paginate } = res.data;
  //        setDaftarTransaction(res.data.results);
  //        setCount(res.data.results.length);
  //        setPaginateTrasaction(paginate);
  //      })
  //      .catch((error) => {
  //        console.log(`apa error catch ? ${error}`);
  //      });
  // };
  const onTransactionList = (page, search, limit = 2) => {
    const url = `${BASE_URL}/transaction/`;
    const params = { page, limit, search };
    const config = {
      headers: {
        Authorization: jwt.get(),
      },
      params,
    };

    http.publicHTTP
      .get(url, config)
      .then((response) => {
        const { results, ...paginate } = response.data;
        setDaftarTransaction(results);
        setPaginateTrasaction(paginate);
      })
      .catch((error) => {
        console.log(error);
        // message.error(error);
      });
  };
  const onCreateTransaction = async () => {
    const url = `${BASE_URL}/transaction`;
    const config = {
      headers: {
        Authorization: jwt.get(),
      },
    };

    const payload = {
      ...transaction,
      customer,
      item,
      admin,
    };

    await axiosInstance
      .post(url, payload, config)
      .then((response) => {
        message.success(response);
        navigate(0);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Success Add Transaction",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(`apa error catch ? ${error}`);
        message.error(error);
      });
  };
  const onItemList = async () => {
    await axiosInstance
      .get("/item", {
        headers: {
          Authorization: jwt.get(),
        },
      })
      .then((res) => {
        setDaftarItem(res.data.results);
      })
      .catch((error) => {
        console.log(`apa error catch ? ${error}`);
      });
  };
  const onSearch = (name) => {
    const cleanName = name.replace(/\s+/g, "");
    const filteredCustomers = daftarCustomer.filter((customer) =>
      customer.name
        .replace(/\s+/g, "")
        .toLowerCase()
        .includes(cleanName.toLowerCase())
    );
    setSearchCustomer(filteredCustomers);
  };

  const onSearchItem = (name) => {
    const cleanName = name.replace(/\s+/g, "");
    const filteredItem = daftarItem.filter((customer) =>
      customer.name
        .replace(/\s+/g, "")
        .toLowerCase()
        .includes(cleanName.toLowerCase())
    );
    setSearchItem(filteredItem);
  };
  const onTransactionPaginate = (page) => {
    onTransactionList(page);
  };

  const addCustomer = () => {
    navigate("/customer");
  };

  const onTransactionSearch = (search) => {
    onTransactionList(null, search);
  };

  const onTransactionLimit = (limit) => {
    onTransactionList(null, null, limit);
  };

  const handleCustomerClick = (customer) => {
    setCustomer({
      code: customer.code,
      name: customer.name,
      phonenumber: customer.phonenumber,
    });
    setOnName(customer.name);
    setOnPhone(customer.phonenumber);
    setSearchCustomer([]);
  };
  const reloadCustomer = () => {
    setOnName("");
    setOnPhone("");
    setSearchTerm("");
  };
  const reloadItem = () => {
    setNameItem("");
    setOnPrice("");
    setOnService("");
    setSearchTermItem("");
  };

  const handleItemClick = (item) => {
    setItem({
      code: item.code,
      name: item.name,
      service: item.service,
      price: item.price,
    });
    setTransaction({
      totalPrice: item.price,
      // code: code,
    });

    setNameItem(item.name);
    setOnService(item.service);
    setOnPrice(item.price);
    setSearchItem([]);
  };

  useEffect(() => {
    onCustomerList();
    onItemList();
    onTransactionList();
    setAdmin({
      username: JSON.parse(jwt.getAdmin()).username,
      email: JSON.parse(jwt.getAdmin()).email,
    });
  }, []);

  useEffect(() => {
    onSearchItem(searchTermItem);
  }, [searchTermItem]);

  useEffect(() => {
    onSearch(searchTerm);
  }, [searchTerm]);

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
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Customer Name
                </label>
                <div className="flex gap-2 relative ">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <FiSearch />
                  </div>
                  <input
                    type="text"
                    id="input-group-1"
                    value={onName || searchTerm || ""}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Name Customer"
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button
                    type="button"
                    className=" py-3 px-5 text-sm font-medium text-center text-gray-900 rounded-lg bg-white sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    onClick={reloadCustomer}
                  >
                    <TbReload />
                  </button>
                </div>
                {searchCustomer.length > 0 ? (
                  <div className="bg-gray-50 border divide-y-1  divide-black border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 overflow-y-auto h-13 ">
                    {searchCustomer.map((customer) => (
                      <div
                        key={customer.id}
                        className="py-2 hover:bg-[#ACE2E1] px-2 rounded-lg"
                        onClick={() => handleCustomerClick(customer)}
                      >
                        {customer.name} - {customer.phonenumber}
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
              <div className="w-1/2">
                {" "}
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Phone Number
                </label>
                <input
                  type="text"
                  value={onPhone}
                  id="phonenumber"
                  className="shadow-sm  bg-[#ACE2E1]  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Phone Number"
                  required=""
                  disabled
                />
              </div>
            </div>

            {/* Modal toggle */}
            <div className="flex gap-2">
              <button
                className="my-3 py-3 px-5 text-sm font-medium text-center text-gray-900 rounded-lg bg-[#41C9E2] sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                type="button"
                onClick={addCustomer}
              >
                Add Customer
              </button>
            </div>

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
                          onChange={(e) =>
                            onChangeListener.onChangeText(
                              e,
                              customerAdd,
                              setCustomerAdd
                            )
                          }
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
                          name="phonenumber"
                          id="phonenumber"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Input No Handphone"
                          required=""
                          onChange={(e) =>
                            onChangeListener.onChangeText(
                              e,
                              customerAdd,
                              setCustomerAdd
                            )
                          }
                        />
                      </div>
                    </div>
                    <button
                      onClick={onCreateCustomer}
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
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Item Name
                </label>
                <div className="flex relative gap-2  ">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <FiSearch />
                  </div>
                  <input
                    type="text"
                    id="input-group-1"
                    value={onNameItem || searchTermItem || ""}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Name Item"
                    onChange={(e) => setSearchTermItem(e.target.value)}
                  />
                  <button
                    type="button"
                    className=" py-3 px-5 text-sm font-medium text-center text-gray-900 rounded-lg bg-white sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    onClick={reloadItem}
                  >
                    <TbReload />
                  </button>
                </div>
                {searchItem.length > 0 ? (
                  <div className="bg-gray-50 border divide-y-1  divide-black border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 overflow-y-auto h-13 ">
                    {searchItem.map((item) => (
                      <div
                        key={item.id}
                        className="py-2 hover:bg-[#ACE2E1] px-2 rounded-lg"
                        onClick={() => handleItemClick(item)}
                      >
                        {item.name} - {item.service} -{" "}
                        {formatCurrency(item.price)}
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="flex w-full gap-5 flex-direction-column">
              <div className="w-1/2">
                {" "}
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Service Name
                </label>
                <input
                  type="text"
                  id="service"
                  disabled
                  value={onService}
                  className="shadow-sm bg-[#ACE2E1]  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Service Name"
                  required=""
                />
              </div>
              <div className="w-1/2">
                {" "}
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Price
                </label>
                <input
                  type="text"
                  id="price"
                  disabled
                  value={formatCurrency(onPrice)}
                  className="disabled shadow-sm bg-[#ACE2E1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Price"
                  required=""
                />
              </div>
            </div>
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
                {onName}
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
                {onNameItem}
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
                {formatCurrency(onPrice)}
              </label>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full gap-5">
          <button
            onClick={onCreateTransaction}
            className="hover:text-white hover:bg-green-500 gap-2 flex items-center py-3 px-5 text-sm font-medium text-center text-gray-900 rounded-lg bg-[#41C9E2] sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            {" "}
            <FaCheck />
            Submit
          </button>
          <button
            type="submit"
            className="hover:text-white hover:bg-red-500 flex items-center gap-2 py-3 px-5 text-sm font-medium text-center text-gray-900 rounded-lg bg-[#ACE2E1] sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            {" "}
            <IoIosCloseCircle />
            Cancel
          </button>
        </div>
        <div className="gap-5 py-5 my-5">
          <div className="block mb-5 text-lg font-medium text-gray-900 dark:text-gray-300">
            Transaction Detail
          </div>
          <div className="flex w-full gap-5 pb-5 flex-direction-column">
            <div className="w-1/2">
              {" "}
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Transaction Name
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Input Transaction Name"
                required=""
              />
            </div>
            <div className="w-1/2">
              <PageLimit callback={onTransactionLimit} />
            </div>
          </div>
          <div className="flex items-center justify-center w-full gap-5 flex-direction-column">
            {/* Buat Tabel */}
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
              <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-center">
                      Code
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      Total Price
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      Item Name
                    </th>
                    <th scope="col" className="px-5 py-3 text-center">
                      Customer Name
                    </th>
                    <th scope="col" className="px-5 py-3 text-center">
                      Created At
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {daftarTransaction.map((customer) => (
                    <tr
                      key={customer._id}
                      className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
                      >
                        {customer.code || ""}
                      </th>
                      <td className="px-6 py-4 text-center">
                        {formatCurrency(customer.totalPrice) || 0}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {customer.items.name || ""}
                      </td>
                      <td className="px-2 py-4 text-center">
                        {customer.customers.name || ""}
                      </td>
                      <td className="px-3 py-4 text-center">
                        {
                          new Date(customer.createdAt)
                            .toISOString()
                            .split("T")[0]
                        }
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <Pagination
            pagination={paginateTransaction}
            callback={onTransactionPaginate}
          />
        </div>
      </div>
    </section>
  );
}
