import { useState } from "react";
import { StateContext } from "./StateContext";

const StateContextProvider = ({ children }) => {
  const [modal, setModal] = useState("hidden");
  const [error, setError] = useState("");
  const [newEntry, setNewEntry] = useState("");
  const [editEntry, setEditEntry] = useState("");
  const [showDetails, setShowDetails] = useState("");

  return (
    <StateContext
      value={{
        modal,
        setModal,
        error,
        setError,
        newEntry,
        setNewEntry,
        editEntry,
        setEditEntry,
        showDetails,
        setShowDetails,
      }}
    >
      {children}
    </StateContext>
  );
};

export default StateContextProvider;
