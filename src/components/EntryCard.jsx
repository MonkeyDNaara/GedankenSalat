// data structure: {id: "generated with crypto.randomUUID()", title: "...", date: "xxx", imgUrl: "url", content: "text"}

const EntryCard = ({ entry }) => {
  const { title, date, imgUrl } = entry;

  return (
    <div className="card bg-base-100 w-50 shadow-md shadow-black m-4 hover:scale-102 cursor-pointer">
      <figure>
        <img src={imgUrl} alt="random picture" className="w-full h-40" />
      </figure>
      <div className="card card-body">
        <h2 className="card">{title}</h2>
        <div>{date}</div>
      </div>
    </div>
  );
};
export default EntryCard;
