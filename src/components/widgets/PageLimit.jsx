import { useRef } from "react";
import PropTypes from "prop-types";

const PageLimit = ({callback}) => {
    const limit = useRef({value: 2});
  
    return (
        <>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
                Page Limit
            </label>
            <form className="max-w-sm mx-auto" >
                <select id="page" ref={limit} onChange={()=> callback(limit.current.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light">
                    <option>Choose Limit</option>
                    <option value={2}>2</option>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                </select>
            </form>
        </>
    )

}

PageLimit.propTypes = {
    callback: PropTypes.func
}

export default PageLimit