import Header from "./components/Header.jsx";
import EntryList from "./components/EntryList.jsx";
import Footer from "./components/Footer.jsx";
import { useEffect, useState } from "react";
import { addData, readData } from "./utils/storage.js";

const App = () => {
  const [entries, setEntries] = useState([]);

  const handleAddEntry = (newEntry) => {
    const wasAdded = addData(newEntry);
    if (wasAdded) {
      setEntries((prev) => [...prev, newEntry]);
    }
  };

  useEffect(() => setEntries(readData()), []);

  return (
    <>
      <Header />
      <EntryList entries={entries} handleAddEntry={handleAddEntry} />
      <Footer />
    </>
  );
};

export default App;
