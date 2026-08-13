import { use } from "react";
import { EntriesContext } from ".././contexts/EntriesContext.jsx";
import { StateContext } from ".././contexts/StateContext.jsx";

const EntryDetails = ({ escFunction }) => {
  const { entries } = use(EntriesContext);
  const { showDetails } = use(StateContext);
  const entriesFilter = entries.filter((entry) => entry.id == showDetails);
  const [entry] = entriesFilter;
  const { title, date, imgUrl, content } = entry;

  return (
    <div
      className={`card bg-base-300 w-100 flex justify-between shadow-md shadow-black m-4 ${showDetails ? "" : "hover:scale-102 cursor-pointer"} `}
    >
      <div className="flex justify-between align-text-top m-2">
        <div className="m-2 ">
          <h2 className="card-title ">{title}</h2>
          <p className=" m-2">{date}</p>
        </div>
        <div className="m-2">
          <button
            type="button"
            id="modalCloseButton"
            className="ml-auto hover:text-white text-sm pr-2 rounded cursor-pointer hover:bg-brand-dark-hover"
            onClick={() => escFunction()}
          >
            X
          </button>
        </div>
      </div>
      <figure>
        <img src={imgUrl} alt="random picture" className="w-90 h-60" />
      </figure>
      <p className="card-body m-2">{content}</p>
      <div className="flex align-center justify-evenly mx-2 mt-2 mb-4">
        <button className="card card-actions btn btn-primary">Edit</button>
        <button className="card card-actions btn btn-secondary">Delete</button>
      </div>
    </div>
  );
};
export default EntryDetails;
