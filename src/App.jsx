import Header from "./components/Header.jsx";
import EntryList from "./components/EntryList.jsx";
import Footer from "./components/Footer.jsx";
import { useEffect, useState } from "react";
import { addData, readData } from "./utils/storage.js";
import Modal from "./components/Modal.jsx";

const App = () => {
  const [entries, setEntries] = useState([]);
  const [modal, setModal] = useState("hidden");
  const [error, setError] = useState("");
  const [newEntry, setNewEntry] = useState("");
  const [editEntry, setEditEntry] = useState("");
  const [showDetails, setShowDetails] = useState("");

  const handleAddEntry = (newEntry) => {
    const wasAdded = addData(newEntry);
    if (wasAdded) {
      setEntries((prev) => [...prev, newEntry]);
      setNewEntry("");
    } else {
      setError("Entry already exists.");
      // window.alert("Entry already exists.");
    }
  };

  useEffect(() => setEntries(readData()), []);

  return (
    <div className="flex flex-col h-screen justify-between bg-base-200">
      <Header handleNewEntry={setNewEntry} />
      <Modal
        errorMessage={error}
        handleError={setError}
        newEntry={newEntry}
        handleAddEntry={handleAddEntry}
        handleNewEntry={setNewEntry}
        modalState={modal}
        handleModalState={setModal}
        detailsState={showDetails}
        handleShowDetails={setShowDetails}
      />
      <EntryList
        entries={entries}
        handleAddEntry={handleAddEntry}
        handleShowDetails={setShowDetails}
        handleModalState={setModal}
      />
      <Footer />
    </div>
  );
};

export default App;
