import { useEffect, useState } from "react";
import { PaginationData } from "../data/PaginationsData";
import PageLimit from "./widgets/PageLimit";
import Pagination from "./widgets/Pagination";
import Search from "./widgets/Search";
import useMessage from "../libs/hooks/useMessage";
import { useNavigate } from "react-router-dom";
import useHTTP from "../libs/hooks/useHTTP";
import useChangeListener from "../libs/hooks/useChangeListener";
import useValidator from "../libs/hooks/useValidator";
import { BASE_URL } from "../libs/config/settings";
import useJWT from "../libs/hooks/useJWT";
import { FaCheckCircle } from "react-icons/fa";
export default function TransactionDetail() {
  const [paginateTransaction, setPaginateTrasaction] = useState(PaginationData);
  const onChangeListener = useChangeListener();
  const jwt = useJWT();
  const message = useMessage();
  const navigate = useNavigate();
  const http = useHTTP();
  const transactionvalidator = useValidator({
    totalPrice: null,
    "customers.phonenumber": null,
  });

  const [daftarTransaction, setDaftarTransaction] = useState([]);
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
        message.error(error);
      });
  };
  const formatCurrency = (data) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(data);
  };
  const onTransactionSearch = (search) => {
    onTransactionList(null, search);
  };

  const onTransactionLimit = (limit) => {
    onTransactionList(null, null, limit);
  };
  useEffect(() => {
    onTransactionList();
  }, []);
  const onTransactionPaginate = (page) => {
    onTransactionList(page);
  };
  return (
    <section className="bg-[#F7EEDD] dark:bg-black-900 h-screen  h-96 bg-cover">
      <div className="flex-1 max-w-screen-md px-4 py-2 mx-auto lg:py-16 ">
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
              <Search callback={onTransactionSearch} />
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
                      Customer Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      Item Name
                    </th>
                    <th scope="col" className="px-5 py-3 text-center">
                      Created At
                    </th>
                    <th scope="col" className="px-5 py-3 text-center">
                      Total Price
                    </th>
                    <th scope="col" className="px-5 py-3 text-center">
                      Status Laundry
                    </th>
                    <th scope="col" className="px-5 py-3 text-center">
                      Status Payment
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {daftarTransaction.map((transaction) => (
                    <tr
                      key={transaction._id}
                      className="border-b odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-center text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {transaction.code || ""}
                      </th>
                      <td className="px-6 py-4 text-center">
                        {transaction.customers.name || ""}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {transaction.items.name || ""}
                      </td>
                      <td className="px-2 py-4 text-center">
                        {
                          new Date(transaction.createdAt)
                            .toISOString()
                            .split("T")[0]
                        }
                      </td>
                      <td className="px-2 py-4 text-center">
                        {formatCurrency(transaction.totalPrice) || 0}
                      </td>
                      <td className="px-2 py-4 text-center">
                        {transaction.statusLaundry === "Process" ? (
                          <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">
                            Process
                          </span>
                        ) : (
                          <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-300 border border-green-300">
                            Done
                          </span>
                        )}
                      </td>
                      <td className="px-3 py-4 text-center">
                        {transaction.statusPayment === "UnPaid" ? (
                          <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-300 border border-yellow-300">
                            {transaction.statusPayment}
                          </span>
                        ) : (
                          <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-300 border border-green-300">
                            {transaction.statusPayment}
                          </span>
                        )}
                        <>
                          <button
                            data-modal-target="popup-modal"
                            data-modal-toggle="popup-modal"
                            className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            type="button"
                          >
                            <FaCheckCircle />
                          </button>
                          <div
                            id="popup-modal"
                            tabIndex={-1}
                            className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                          >
                            <div className="relative p-4 w-full max-w-md max-h-full">
                              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                <button
                                  type="button"
                                  className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                  data-modal-hide="popup-modal"
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
                                <div className="p-4 md:p-5 text-center">
                                  <svg
                                    className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                    />
                                  </svg>
                                  <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                    Are you sure you want to delete this
                                    product?
                                  </h3>
                                  <button
                                    data-modal-hide="popup-modal"
                                    type="button"
                                    className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                                  >
                                    Yes, I'm sure
                                  </button>
                                  <button
                                    data-modal-hide="popup-modal"
                                    type="button"
                                    className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                  >
                                    No, cancel
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
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
