import Header from "./components/Header.jsx";
import EntryList from "./components/EntryList.jsx";
import Footer from "./components/Footer.jsx";
import { useEffect, useState } from "react";
import { addData, readData } from "./utils/storage.js";
import Modal from "./components/Modal.jsx";

const App = () => {
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState("");
  const [newEntry, setNewEntry] = useState("");

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
    <>
      <Header handleNewEntry={setNewEntry} />
      <Modal errorMessage={error} handleError={setError} newEntry={newEntry} />
      <EntryList entries={entries} handleAddEntry={handleAddEntry} />
      <Footer />
    </>
  );
};

export default App;
