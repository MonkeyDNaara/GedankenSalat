import EntryCard from "./EntryCard";
import EntryForm from "./EntryForm";

const EntryList = ({ entries, handleAddEntry }) => {
  return (
    <div>
      <h2 className="text-2xl text-accent-content p-4">
        Entries - newest first
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
        {entries.map((entry) => (
          <EntryCard entry={entry} key={entry.id} />
        ))}
      </div>
    </div>
  );
};
export default EntryList;
