import { useState } from "react";
import { EntriesContext } from "./EntriesContext";

const EntriesContextProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);

  return (
    <EntriesContext
      value={{
        entries,
        setEntries,
      }}
    >
      {children}
    </EntriesContext>
  );
};

export default EntriesContextProvider;
