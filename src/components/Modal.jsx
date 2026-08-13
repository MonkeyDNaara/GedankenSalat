// modal state = ["hidden", "error", "new", "edit", "details"]

import { useEffect, use } from "react";
import AlertModal from "./AlertModal";
import EntryForm from "./EntryForm";
import EntryDetails from "./EntryDetails";
import { StateContext } from ".././contexts/StateContext.jsx";

const Modal = ({ handleAddEntry }) => {
  const {
    modal,
    setModal,
    error,
    setError,
    newEntry,
    setNewEntry,
    showDetails,
    setShowDetails,
  } = use(StateContext);

  useEffect(() => {
    error ? setModal("error") : setModal("hidden");
  }, [error]);

  useEffect(() => {
    newEntry ? setModal("new") : setModal("hidden");
  }, [newEntry]);

  useEffect(() => {
    showDetails ? setModal("details") : setModal("hidden");
  }, [showDetails]);

  const handleEsc = () => {
    setModal("hidden");
    setError("");
    setNewEntry("");
    setShowDetails("");
  };

  return (
    <div
      id="searchModal"
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm ${modal == "hidden" ? "hidden" : ""} justify-center pt-20 px-4 z-50`}
    >
      <div id="modalBox" className="">
        <div
          className={`flex justify-center p-4 ${modal == "error" ? "" : "hidden"}`}
        >
          {error && <AlertModal message={error} escFunction={handleEsc} />}
        </div>
        <div
          className={`flex justify-center p-4 ${modal == "new" ? "" : "hidden"}`}
        >
          {newEntry && (
            <EntryForm
              handleAddEntry={handleAddEntry}
              escFunction={handleEsc}
            />
          )}
        </div>
        <div
          className={`flex justify-center p-4 ${modal == "details" ? "" : "hidden"}`}
        >
          {showDetails && <EntryDetails escFunction={handleEsc} />}
        </div>
      </div>
    </div>
  );
};
export default Modal;
