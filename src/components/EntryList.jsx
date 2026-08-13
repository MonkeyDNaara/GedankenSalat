import EntryCard from "./EntryCard";

const EntryList = ({ entries, handleShowDetails, handleModalState }) => {
  return (
    <div className="bg-base-200 mb-auto">
      <h2 className="text-2xl text-accent-content p-4">
        Entries - newest first
      </h2>
      <div className="px-8 pb-8 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
        {entries.map((entry) => (
          <EntryCard
            entry={entry}
            key={entry.id}
            onClick={() => {
              handleShowDetails("details");
            }}
          />
        ))}
      </div>
    </div>
  );
};
export default EntryList;
