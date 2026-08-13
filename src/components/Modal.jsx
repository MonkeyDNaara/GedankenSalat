// modal state = ["hidden", "error", "new", "edit", "details"]

import { useEffect } from "react";
import AlertModal from "./AlertModal";
import EntryForm from "./EntryForm";
import EntryDetails from "./EntryDetails";

const Modal = ({
  errorMessage,
  handleError,
  newEntry,
  handleAddEntry,
  handleNewEntry,
  modalState,
  handleModalState,
  detailsState,
  handleShowDetails,
  entry,
}) => {
  useEffect(() => {
    errorMessage ? handleModalState("error") : handleModalState("hidden");
  }, [errorMessage]);

  useEffect(() => {
    newEntry ? handleModalState("new") : handleModalState("hidden");
  }, [newEntry]);

  useEffect(() => {
    detailsState ? handleModalState("details") : handleModalState("hidden");
  }, [detailsState]);

  const handleEsc = () => {
    handleModalState("hidden");
    handleError("");
    handleNewEntry("");
    handleShowDetails("");
  };

  return (
    <div
      id="searchModal"
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm ${modalState == "hidden" ? "hidden" : ""} justify-center pt-20 px-4 z-50`}
    >
      <div
        id="modalBox"
        className="bg-gray w-full max-h-[85vh] flex flex-col rounded-xl shadow-2xl border border-slate-200"
      >
        <div
          className={`flex justify-center p-4 ${modalState == "error" ? "" : "hidden"}`}
        >
          {errorMessage && (
            <AlertModal message={errorMessage} escFunction={handleEsc} />
          )}
        </div>
        <div
          className={`flex justify-center p-4 ${modalState == "new" ? "" : "hidden"}`}
        >
          {newEntry && (
            <EntryForm
              handleAddEntry={handleAddEntry}
              escFunction={handleEsc}
            />
          )}
        </div>
        <div
          className={`flex justify-center p-4 ${modalState == "details" ? "" : "hidden"}`}
        >
          {detailsState && (
            <EntryDetails entry={entry} escFunction={handleEsc} />
          )}
        </div>
      </div>
    </div>
  );
};
export default Modal;
