
import { useNavigate } from 'react-router-dom';
import useHTTP from '../libs/hooks/useHTTP';
import useJWT from '../libs/hooks/useJWT';
import { useEffect, useState } from 'react';
import { PaginationData } from '../data/PaginationsData';
import { BASE_URL } from "../libs/config/settings";
import Pagination from './widgets/Pagination';
import PageLimit from './widgets/PageLimit';
import useChangeListener from '../libs/hooks/useChangeListener';
import useMessage from '../libs/hooks/useMessage';
import { ItemInit } from '../data/ItemData';
import axios from 'axios';


const Item = () => {
  const navigate = useNavigate()
  const http = useHTTP()
  const jwt = useJWT()
  const onChangeListener = useChangeListener()
  const message = useMessage()

  const [item, setItem] = useState(ItemInit)
  const [daftarItem, setDaftarItem] = useState([])
  const [paginateItem, setPaginateItem] = useState(PaginationData) 

  const onCreateItem = () => {
    const url = `${BASE_URL}/item/`
    const config = {
      headers: {
        Authorization: jwt.get()
      }
    }

    axios.post(url, item, config).then((response) => {
      message.success(response)
      navigate(-1)
    }).catch((error)=>{
      message.error(error)
    })
  }

  const onItemList = (page, search, limit=2) => {
    
    const url = `${BASE_URL}/item/`
    const params = { page, limit, search };
    const config = {
      headers: {
        Authorization: jwt.get()
      },
      params,
    }

    http.publicHTTP.get(url, config).then((response) => {
        const {results, ...paginate} = response.data;
        setDaftarItem(results);
        setPaginateItem(paginate);
      })
      .catch((error) => {
        console.log(error)
        // message.error(error);
      })
    
  }

  const onItemPaginate = (page) => {
    onItemList(page);
  }

  const onItemSearch = (search) => {
    onItemList(null, search);
  }

  const onItemLimit = (limit) => {
    onItemList(null, null, limit)
  }

  useEffect(() => {
    onItemList();
  }, [])
  
    return(
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
                  <div className="w-1/2">
                    {" "}
                    <label
                      htmlFor=""
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Item Name
                    </label>
                    <input
                      name='name'
                      value={item.name}
                      onChange={(e) => onChangeListener.onChangeText(e,item,setItem)}
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="Input Item Name"
                      required=""
                    />
                  </div>
                <div className="w-1/2">
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
                    </div>             
                </div>
                <div>
                    
            <div className="w-full flex  flex-direction-column gap-5">
              <div className="w-1/2">
                {" "}
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Item Name
                </label>
                <input

                  type="number"
                  id="itemName"        
                  name='price'
                  value={item.price}
                  onChange={(e) => onChangeListener.onChangeNumber(e,item,setItem)}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Input Item Name"
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
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <input
                
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Input Date"
                  name='service'
                  value={item.service}
                  onChange={(e) => onChangeListener.onChangeText(e,item,setItem)}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Input Service Name"
                  required=""
                />
              </div>
            </div>
        </div>
        <div className="w-full items-center flex gap-5 justify-center pt-5">
          <button
            onClick={onCreateItem}
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
                    <input
                      type="email"
                      id="email"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="Input Item Name"
                      required=""
                    />
                  </div>
                  <div className="w-1/2">
       
                    <PageLimit callback={onItemLimit}/>
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
                      {daftarItem.map((item)=>(
                          <tr key={item._id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                                  {item.code}
                              </th>
                              <td className="px-6 py-4 text-center">
                                  {item.name}
                              </td>
                              <td className="px-6 py-4 text-center">
                                  {item.price}
                              </td>
                              <td className="px-6 py-4 text-center">
                                  {item.service}
                              </td>
                              <td className="px-2 py-4 text-center">
                                  {new Date(item.createdAt).toISOString().split('T')[0]}
                              </td>
                              <td className="px-3 py-4 text-center">
                                  {new Date(item.updatedAt).toISOString().split('T')[0]}
                              </td>
                              <td className="px-6 py-4 text-center">
                                  <a href="#" className="font-medium text-colorPicker-biruBG hover:underline">Edit</a>
                              </td>
                              <td className="px-6 py-4 text-center">
                                  <a href="#" className="font-medium text-red-600 hover:underline">Delete</a>
                              </td>
                          </tr>
                      ))}         
                    </tbody>
                </table>
            </div>           
                </div>
                <Pagination pagination={paginateItem} callback={onItemPaginate}/>
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

export default Item;
