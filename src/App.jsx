import Header from "./components/Header.jsx";
import EntryList from "./components/EntryList.jsx";
import Footer from "./components/Footer.jsx";
import { use, useEffect } from "react";
import { addData, readData } from "./utils/storage.js";
import Modal from "./components/Modal.jsx";
import { StateContext } from "./contexts/StateContext.jsx";
import { EntriesContext } from "./contexts/EntriesContext.jsx";

const App = () => {
  const { setNewEntry, setError } = use(StateContext);
  const { entries, setEntries } = use(EntriesContext);

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
      <EntryList />
      <Footer />
    </div>
  );
};

export default App;
