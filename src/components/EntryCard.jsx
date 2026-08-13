// data structure: {id: "generated with crypto.randomUUID()", title: "...", date: "xxx", imgUrl: "url", content: "text"}
import { use } from "react";
import { StateContext } from ".././contexts/StateContext.jsx";

const EntryCard = ({ entry }) => {
  const { title, date, imgUrl, id } = entry;
  const { setModal, setShowDetails } = use(StateContext);

  const handleDetails = () => {
    setShowDetails(id);
    setModal("details");
  };

  return (
    <div
      className="card bg-base-100 w-60 shadow-md shadow-black m-4 hover:scale-102 cursor-pointer"
      onClick={() => {
        handleDetails();
      }}
    >
      <figure>
        <img src={imgUrl} alt="card-picture" className="w-full h-40" />
      </figure>
      <div className="card card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card pl-3">{date}</div>
      </div>
    </div>
  );
};
export default EntryCard;
