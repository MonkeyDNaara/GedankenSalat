import Header from "./components/Header.jsx";
import EntryList from "./components/EntryList.jsx";
import Footer from "./components/Footer.jsx";
import { useEffect, useState } from "react";
import { readData } from "./utils/storage.js";

const App = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => setEntries(readData()), []);

  return (
    <>
      <Header />
      <EntryList entries={entries} />
      <Footer />
    </>
  );
};

export default App;
