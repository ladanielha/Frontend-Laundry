import { ItemInit } from "../data/ItemData";
import { useLocation, useNavigate } from "react-router-dom";
import useHTTP from "../libs/hooks/useHTTP";
import useJWT from "../libs/hooks/useJWT";
import useMessage from "../libs/hooks/useMessage";
import useChangeListener from "../libs/hooks/useChangeListener";
import { useEffect, useState } from "react";
import { BASE_URL } from "../libs/config/settings";
import axios from "axios";

const ItemUpdate = () =>{

    const navigate = useNavigate();
    const { state } = useLocation();

    const http = useHTTP();
    const jwt = useJWT();
    const message = useMessage();
    const onChangeListener = useChangeListener();

    const [item, setItem] = useState(ItemInit);

    const onItemDetail = () => {
        const url = `${BASE_URL}/item/${state._id}`;
        const config = {
          headers: {
            Authorization: jwt.get()
          }
        };
    
        axios.get(url, config)
          .then((response) => {
            setItem(response.data);
          })
          .catch((error) => {
            message.error(error);
            navigate(-1)
          })
    }
    
    const onItemUpdate = () => {
        const url = `${BASE_URL}/item/${state._id}`;
        const config = {
          headers: {
            Authorization: jwt.get()
          }
        };
    
        axios.put(url, item, config)
          .then((response) => {
            message.success(response)
            navigate(-1);
          })
          .catch((error) => {
            message.error(error);
          })
    }

    useEffect(() => {
        onItemDetail();
      }, [state._id])

    return(
        <section className="bg-[#F7EEDD] dark:bg-gray-900 h-full">
          <div className="py-2 lg:py-16 px-4 mx-auto max-w-screen-md h-full">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white block">
                Update Item
                </h2>
                <div className="divide-y-2 divide-black ">
                <div className="my-5 gap-5">
                        <div className="w-full flex  flex-direction-column gap-5">
                        <div className="w-1/2 py-1">
                        {" "}
                        <label
                            htmlFor=""
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Item Number
                        </label>
                        <input
                            disabled
                            name='number'
                            value={item.code}
                            onChange={(e) => onChangeListener.onChangeText(e,item,setItem)}
                            className="shadow-sm bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        />
                    </div>
                    <div className="w-1/2 py-1">
                        {" "}
                        <label
                            htmlFor=""
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Item Name
                        </label>
                        <input
                        name='name'
                        onChange={(e) => onChangeListener.onChangeText(e,item,setItem)}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        value={item.name}
                        />
                    </div>
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
                    name='price'
                    value={item.price}
                    onChange={(e) => onChangeListener.onChangeNumber(e,item,setItem)}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    />
                </div>
                <div className="w-1/2 py-1">
                    {" "}
                    <label
                    htmlFor=""
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                    Service Name
                    </label>
                    <input
                    name='service'
                    value={item.service}
                    onChange={(e) => onChangeListener.onChangeText(e,item,setItem)}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    />
                </div>
                </div>
                </div>
                <div className="w-full items-center flex gap-5 justify-center pt-5">
            <button
                onClick={onItemUpdate}
                type="submit"
                className=" py-3 px-5 text-sm font-medium text-center text-gray-900 rounded-lg bg-[#41C9E2] sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
                Submit
            </button>
            <button
                onClick={()=>navigate(-1)}
                className=" py-3 px-5 text-sm font-medium text-center text-gray-900 rounded-lg bg-[#ACE2E1] sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
                Cancel
            </button>
                </div>
                </div>
                </div>
            </div>
            

        </section>
    )
}

export default ItemUpdate