import { useNavigate, useLocation } from "react-router-dom";
import useHTTP from "../libs/hooks/useHTTP";
import useJWT from "../libs/hooks/useJWT";
import { useEffect, useState } from "react";
import { PaginationData } from "../data/PaginationsData";
import { BASE_URL } from "../libs/config/settings";
import Pagination from "./widgets/Pagination";
import PageLimit from "./widgets/PageLimit";
import useChangeListener from "../libs/hooks/useChangeListener";
import useMessage from "../libs/hooks/useMessage";
import { ItemInit } from "../data/ItemData";
import axios from "axios";
import { FaCheck } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { IoTrashBin } from "react-icons/io5";
import Search from "./widgets/Search";
import MessageValidator from "./widgets/MessageValidator";
import useValidator from "../libs/hooks/useValidator";

const Item = () => {
  const navigate = useNavigate();
  const http = useHTTP();
  const jwt = useJWT();
  const onChangeListener = useChangeListener();
  const message = useMessage();

  const [item, setItem] = useState(ItemInit);
  const [daftarItem, setDaftarItem] = useState([]);
  const [paginateItem, setPaginateItem] = useState(PaginationData);
  const { state } = useLocation();
  const [targetModal, setTargetModal] = useState(null);
  const itemvalidator = useValidator({
    name: null,
    price: null,
    service: null,
  });

  const onCreateItem = () => {
    const url = `${BASE_URL}/item/`;
    const config = {
      headers: {
        Authorization: jwt.get(),
      },
    };

    axios
      .post(url, item, config)
      .then((response) => {
        message.success(response);
        navigate(0);
      })
      .catch((error) => {
        message.error(error);
        itemvalidator.except(error)
      });
  };

  const formatCurrency = (data) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(data);
  };

  const onItemList = (page, search, limit = 2) => {
    const url = `${BASE_URL}/item/`;
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
        setDaftarItem(results);
        setPaginateItem(paginate);
      })
      .catch((error) => {
        message.error(error);
      });
  };

  const onItemDelete = (_id) => {
    message.confirmRemove(() => {
      const url = `${BASE_URL}/item/${_id}`;
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

  const onItemPaginate = (page) => {
    onItemList(page);
  };

  const onItemSearch = (search) => {
    onItemList(null, search);
  };

  const onItemLimit = (limit) => {
    onItemList(null, null, limit);
  };

  useEffect(() => {
    onItemList();
  }, []);

  return (
    <section className="bg-[#F7EEDD] dark:bg-gray-900">
      <div className="py-2 lg:py-16 px-4 mx-auto max-w-screen-md  ">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white block">
          Item
        </h2>
        <div className="divide-y-2 divide-black ">
          <div className="my-5 gap-5">
            <div className="block mb-5 text-lg font-medium text-gray-900 dark:text-gray-300">
              Create Item
            </div>
            <div className="w-full flex  flex-direction-column gap-5">
              <div className="w-full py-1">
                {" "}
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Item Name
                </label>
                <input
                  name="name"
                  value={item.name}
                  onChange={(e) =>
                    onChangeListener.onChangeText(e, item, setItem)
                  }
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Input Item Name"
                  required=""
                />
                <MessageValidator messages={itemvalidator.get("name")} />
              </div>
              {/* <div className="w-1/2">
                    {" "}
                    <label
                        htmlFor=""
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >Created At
                    </label>
                    <input
                    // name='createdAt'
                    // value={item.CreatedAt}
                    // onChange={(e)=>onChangeListener.changeText(e,item,setItem)}
                    // type="date" 
                    // className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    // placeholder="Input Date"
                    // required = ""
                    />
                    </div>              */}
            </div>
            <div>
              <div className="w-full flex  flex-direction-column gap-5">
                <div className="w-1/2 py-1">
                  {" "}
                  <label
                    htmlFor=""
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Price
                  </label>
                  <input
                    name="price"
                    onChange={(e) =>
                      onChangeListener.onChangeNumber(e, item, setItem)
                    }
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Input Price"
                    required=""
                  />
                  <MessageValidator messages={itemvalidator.get("price")} />
                </div>
                <div className="w-1/2">
                  {" "}
                  <label
                    htmlFor=""
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Service Name
                  </label>
                  <input
                    name="service"
                    value={item.service}
                    onChange={(e) =>
                      onChangeListener.onChangeText(e, item, setItem)
                    }
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Input Service Name"
                    required=""
                  />
                  <MessageValidator messages={itemvalidator.get("service")} />
                </div>
              </div>
            </div>
            <div className="w-full items-center flex gap-5 justify-center pt-5">
              <button
                onClick={onCreateItem}
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
                <IoIosCloseCircle />
                Cancel
              </button>
            </div>
          </div>

          <div className="my-5 py-5 gap-5">
            <div className="block mb-5 text-lg font-medium text-gray-900 dark:text-gray-300">
              Item Detail
            </div>
            <div className="w-full flex  flex-direction-column gap-5 pb-5">
              <div className="w-1/2">
                {" "}
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Item Name
                </label>
                <Search callback={onItemSearch} />
              </div>
              <div className="w-1/2">
                <PageLimit callback={onItemLimit} />
              </div>
            </div>
            <div className="w-full flex  flex-direction-column gap-5">
              {/* Buat Tabel */}
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-center">
                        Item Number
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Item Name
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
                      <th scope="col" className="px-6 py-3 text-center">
                        Edit
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {daftarItem.map((item) => (
                      <tr
                        key={item._id}
                        className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                      >
                        <th
                          scope="row"
                          className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
                        >
                          {item.code}
                        </th>
                        <td className="px-6 py-3 text-center">{item.name}</td>
                        <td className="px-6 py-3 text-center">
                          {formatCurrency(item.price) || 0}
                        </td>
                        <td className="px-6 py-3 text-center">
                          {item.service}
                        </td>
                        <td className="px-2 py-3 text-center">
                          {new Date(item.createdAt).toISOString().split("T")[0]}
                        </td>
                        <td className="px-3 py-3 text-center">
                          <button
                            onClick={() =>
                              navigate("detail", { state: { _id: item._id } })
                            }
                            type="button"
                            className="rounded-full p-2 text-sm font-normal text-center text-gray-900 rounded-lg hover:bg-yellow-300 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                          >
                            <HiOutlinePencilAlt className="w-5 h-5 rounded-full" />
                          </button>
                        </td>
                        <td className="px-6 py-3 text-center">
                          <button
                            className="rounded-full p-2 text-sm font-normal text-center text-gray-900 rounded-lg sm:w-fit hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            onClick={() => onItemDelete(item._id)}
                          >
                            <IoTrashBin className=" w-5 h-5 rounded-full" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <Pagination pagination={paginateItem} callback={onItemPaginate} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Item;
