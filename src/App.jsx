import Header from "./components/Header.jsx";
import EntryList from "./components/EntryList.jsx";
import Footer from "./components/Footer.jsx";
import { use, useEffect, useState } from "react";
import { addData, readData } from "./utils/storage.js";
import Modal from "./components/Modal.jsx";
import { StateContext } from "./contexts/StateContext.jsx";

const App = () => {
  const [entries, setEntries] = useState([]);

  const { setNewEntry, setError } = use(StateContext);

  const handleAddEntry = (newEntry) => {
    const wasAdded = addData(newEntry);
    if (wasAdded) {
      setEntries((prev) => [...prev, newEntry]);
      setNewEntry("");
    } else {
      setError("Entry already exists.");
    }
  };

  useEffect(() => setEntries(readData()), []);

  return (
    <div className="flex flex-col h-screen justify-between bg-base-200">
      <Header />
      <Modal handleAddEntry={handleAddEntry} />
      <EntryList entries={entries} />
      <Footer />
    </div>
  );
};

export default App;
