import { StateContext } from ".././contexts/StateContext.jsx";
import { EntriesContext } from ".././contexts/EntriesContext.jsx";
import { updateData, isItemInData, readData } from ".././utils/storage.js";
import { use } from "react";

const EntryForm = ({ handleAddEntry, escFunction }) => {
  const { modal, setError, setModal, editEntry, setEditEntry } =
    use(StateContext);
  const { entries, setEntries } = use(EntriesContext);
  const entriesFilter = entries.filter((entry) => entry.id == editEntry);
  const [entry] = entriesFilter;

  const handleForm = (e) => {
    e.preventDefault();
    if (modal == "new") {
      const newEntry = {
        id: crypto.randomUUID(),
        title: `${e.target.title.value}`,
        date: `${e.target.date.value}`,
        imgUrl: `${e.target.imgUrl.value}`,
        content: `${e.target.content.value}`,
      };
      handleAddEntry(newEntry);
    } else if (modal == "edit") {
      const editEntry = {
        id: entry.id,
        title: `${e.target.title.value}`,
        date: `${e.target.date.value}`,
        imgUrl: `${e.target.imgUrl.value}`,
        content: `${e.target.content.value}`,
      };
      if (isItemInData(editEntry.date)) {
        setError("Entry already exists.");
        console.error("Entry is already in Storage.");
      } else {
        updateData(editEntry);
        setEntries(readData());
        setModal("hidden");
      }
      setEditEntry("");
    }
  };
  return (
    <div>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 m-2">
        <div className="flex justify-between align-text-top">
          <label className="fieldset fieldset-legend text-lg">Entry</label>
          <button
            type="button"
            id="modalCloseButton"
            className="ml-auto hover:text-white text-sm pr-2 rounded cursor-pointer hover:bg-brand-dark-hover"
            onClick={() => escFunction()}
          >
            X
          </button>
        </div>
        <form className="grid" onSubmit={handleForm}>
          <div className="pb-2">
            <label htmlFor="title" className="label">
              Title:{" "}
            </label>
            <input
              type="text"
              name="title"
              id="title"
              required
              placeholder="title of todays entry"
              className="input input-primary"
              defaultValue={modal == "new" ? "" : entry.title}
            />
          </div>
          <div className="pb-2">
            <label htmlFor="date" className="label">
              Date:{" "}
            </label>
            <input
              type="date"
              name="date"
              id="date"
              required
              placeholder="tt.mm.jjjj"
              className="input input-primary"
              defaultValue={modal == "new" ? "" : entry.date}
            />
          </div>
          <div className="pb-2">
            <label htmlFor="imgUrl" className="label">
              Image URL:
            </label>
            <label className="input input-primary">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </g>
              </svg>
              <input
                type="url"
                required
                placeholder="https://"
                pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
                name="imgUrl"
                id="imgUrl"
                defaultValue={modal == "new" ? "" : entry.imgUrl}
              />
            </label>
          </div>
          <div className="pb-2">
            <label htmlFor="content" className="label">
              Content:{" "}
            </label>
            <textarea
              name="content"
              id="content"
              required
              placeholder="What's up today?"
              className="textarea textarea-primary"
              defaultValue={modal == "new" ? "" : entry.content}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-outline">
            Submit
          </button>
        </form>
      </fieldset>
    </div>
  );
};
export default EntryForm;
