// modal state = ["hidden", "error", "new", "edit"]

import { useEffect, useState } from "react";
import AlertModal from "./AlertModal";
import EntryForm from "./EntryForm";

const Modal = ({ errorMessage, handleError, newEntry, handleAddEntry }) => {
  const [modal, setModal] = useState("hidden");

  useEffect(() => {
    errorMessage ? setModal("error") : setModal("hidden");
  }, [errorMessage]);

  useEffect(() => {
    newEntry ? setModal("new") : setModal("hidden");
  }, [newEntry]);

  const handleEsc = () => {
    setModal("hidden");
    handleError("");
    handleAddEntry("");
  };

  return (
    <div
      id="searchModal"
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm ${modal == "hidden" ? "hidden" : ""} justify-center pt-20 px-4 z-50`}
    >
      <div
        id="modalBox"
        className="bg-gray w-full max-h-[85vh] flex flex-col rounded-xl shadow-2xl border border-slate-200"
      >
        <button
          type="button"
          id="modalCloseButton"
          className="ml-auto text-primary-content hover:text-white text-sm px-4 py-4 bg-brand-purple rounded cursor-pointer hover:bg-brand-dark-hover"
          onClick={() => handleEsc()}
        >
          ESC
        </button>
        <div
          className={`flex justify-center p-4 ${modal == "error" ? "" : "hidden"}`}
        >
          {errorMessage && <AlertModal message={errorMessage} />}
        </div>
        <div
          className={`flex justify-center p-4 ${modal == "new" ? "" : "hidden"}`}
        >
          {newEntry && <EntryForm handleAddEntry={handleAddEntry} />}
        </div>
      </div>
    </div>
  );
};
export default Modal;
