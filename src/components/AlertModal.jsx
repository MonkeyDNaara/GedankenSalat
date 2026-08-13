const AlertModal = ({ message, escFunction }) => {
  return (
    <div role="alert" className="alert alert-error flex flex-col">
      <div className="flex justify-end w-full">
        <button
          type="button"
          id="modalCloseButton"
          className="ml-auto hover:text-white text-sm rounded cursor-pointer hover:bg-brand-dark-hover"
          onClick={() => escFunction()}
        >
          X
        </button>
      </div>
      <div className="flex justify-center align-center">
        <div className="p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <span className="p-1">{message}</span>
      </div>
    </div>
  );
};
export default AlertModal;
