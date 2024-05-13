import PropTypes from "prop-types";

const Pagination = ({ pagination, callback }) => {
  return (
    <div className="flex my-5 gap-5 justify-center">
      <button
        className=" rounded-lg gap-2 flex items-center justify-center px-3 h-10 text-base font-medium text-colorPicker-krem bg-colorPicker-biruBG border sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        disabled={!pagination.previous}
        onClick={() => {
          callback(pagination.previous);
        }}
      >
        <svg
          className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 5H1m0 0 4 4M1 5l4-4"
          />
        </svg>
        Prev
      </button>

      <button
        className="flex items-center rounded-lg justify-center px-4 h-10 text-base font-medium text-colorPicker-krem bg-colorPicker-biruBG border sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        disabled={!pagination.next}
        onClick={() => {
          callback(pagination.next);
        }}
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
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </button>
    </div>
  );
};

Pagination.propTypes = {
  pagination: PropTypes.object,
  callback: PropTypes.func,
};

export default Pagination;
