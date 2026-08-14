import Header from "./components/Header.jsx";
import EntryList from "./components/EntryList.jsx";
import Footer from "./components/Footer.jsx";
import { use, useEffect } from "react";
import { addData, deleteData, readData } from "./utils/storage.js";
import Modal from "./components/Modal.jsx";
import { StateContext } from "./contexts/StateContext.jsx";
import { EntriesContext } from "./contexts/EntriesContext.jsx";
import { ThemeContext } from "./contexts/ThemeContext.jsx";

const App = () => {
  const { setNewEntry, setError, setShowDetails, setModal, setEditEntry } =
    use(StateContext);
  const { setEntries } = use(EntriesContext);
  const { theme } = use(ThemeContext);

  const handleAddEntry = (newEntry) => {
    const wasAdded = addData(newEntry);
    if (wasAdded) {
      setEntries((prev) => [...prev, newEntry]);
      setNewEntry("");
    } else {
      setError("Entry already exists.");
    }
  };

  const handleDeleteEntry = (id) => {
    deleteData(id);
    const newData = readData();
    setEntries(newData);
    setShowDetails("");
    setModal("hidden");
  };

  const handleEditEntry = (id) => {
    setEditEntry(id);
    setShowDetails("");
    setModal("edit");
  };

  useEffect(() => setEntries(readData()), []);

  return (
    <div
      data-theme={theme}
      className="flex flex-col h-screen justify-between bg-base-200"
    >
      <Header />
      <Modal
        handleAddEntry={handleAddEntry}
        handleDeleteEntry={handleDeleteEntry}
        handleEditEntry={handleEditEntry}
      />
      <EntryList />
      <Footer />
    </div>
  );
};

export default App;
