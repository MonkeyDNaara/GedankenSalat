import { useEffect, useState } from "react";
import AlertModal from "./AlertModal";

const Modal = ({ errorMessage, handleError }) => {
  // const [modal, setModal] = useState(false);

  // useEffect(handleModal, [errorMessage]);

  return (
    <div
      id="searchModal"
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm ${errorMessage ? "" : "hidden"} justify-center pt-20 px-4 z-50`}
    >
      <div
        id="modalBox"
        className="bg-[#05030a] w-full max-h-[85vh] flex flex-col rounded-xl shadow-2xl border border-slate-200"
      >
        <button
          type="button"
          id="modalCloseButton"
          className="ml-auto text-slate-400 hover:text-white text-sm px-2 py-2 bg-brand-purple rounded cursor-pointer hover:bg-brand-dark-hover"
          onClick={() => handleError("")}
        >
          ESC
        </button>
        <div>{errorMessage && <AlertModal message={errorMessage} />}</div>
      </div>
    </div>
  );
};
export default Modal;
