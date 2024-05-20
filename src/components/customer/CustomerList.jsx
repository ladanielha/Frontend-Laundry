import { useNavigate } from "react-router-dom";
import useHTTP from "../libs/hooks/useHTTP";
import useHTTP from "../libs/hooks/useHTTP";
import useJWT from "../libs/hooks/useJWT";
import useMessage from "../libs/hooks/useMessage";
import Pagination from "./widgets/Pagination";
import PageLimit from "./widgets/PageLimit";
import { useEffect, useRef, useState } from "react";
import { PaginationData } from "../data/PaginationsData";
import { axiosInstance } from "../libs/config/config";


export const CustomerList = () => {
    const navigate = useNavigate();
  const http = useHTTP();
  const jwt = useJWT();
  const onChangeListener = useChangeListener();
  const message = useMessage();

  const [daftarCustomer, setDaftarCustomer] = useState([]);
  const [paginateCustomer, setPaginateCustomer] = useState(PaginationData);
  const [loading, setLoading] = useState(false); // State to manage loading state
  const [noDataFound, setNoDataFound] = useState(false); // State to manage no data found state

  const onCustomesrList = (page, search, limit = 2) => {
    setLoading(true); // Set loading to true when fetching data

    const url = `${BASE_URL}/customer/`;
    const params = { page, limit, search };
    const config = {
      headers: {
        Authorization: jwt.get(),
      },
      params,
    };

    http.privateHTTP
      .get(url, config)
      .then((response) => {
        const { results, ...paginate } = response.data;
        setDaftarCustomer(results);
        setPaginateCustomer(paginate);
        setLoading(false); // Set loading to false when data fetching is done
        if (results.length === 0) {
          setNoDataFound(true); // Set noDataFound to true if no data is found
        } else {
          setNoDataFound(false); // Set noDataFound to false if data is found
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false); // Set loading to false in case of error
      });
  };

  const onCustomerList = async (page, search, limit = 2) => {

    await axiosInstance
      .get("/customer", {
        headers: {
          Authorization: jwt.get(),
        },
      })
      .then((res) => {
        const { results, ...paginate } = res.data;
        setDaftarCustomer(results);
        setPaginateItem(paginate);
      })
      .catch((error) => {
        console.log(`apa error catch ? ${error}`);
        message.error(error);
      });
  };



  return <div>CustomerList</div>;
};
