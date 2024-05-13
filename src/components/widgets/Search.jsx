import { useRef } from "react";
import PropTypes from "prop-types";
import { FiSearch } from "react-icons/fi";

const Search = ({ callback }) => {
  const search = useRef("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      callback(search.current.value);
    }
  };

  const handleClick = () => {
    callback(search.current.value);
  };

  return (
    <>
      <div className="flex items-center">
        <input
          ref={search}
          placeholder="Search"
          onKeyPress={handleKeyPress}
          className="flex-grow shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
        />
        <button
          type="button"
          className="ml-2 py-3 px-5 text-sm font-medium text-center text-gray-900 rounded-lg bg-white hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          onClick={handleClick}
        >
          <FiSearch />
        </button>
      </div>
    </>
  );
};

Search.propTypes = {
  callback: PropTypes.func.isRequired,
};

export default Search;
