const EntryDetails = ({ entry, escFunction }) => {
  const { title, date, imgUrl, content } = entry;

  return (
    <div className="card bg-base-100 w-100 shadow-md shadow-black m-4 hover:scale-102 cursor-pointer">
      <div className="card card-body flex justify-between">
        <div>
          <h2 className="card">{title}</h2>
          <div>{date}</div>
        </div>
        <div>
          <button
            type="button"
            id="modalCloseButton"
            className="ml-auto text-primary-content hover:text-white text-sm px-4 py-4 rounded cursor-pointer hover:bg-brand-dark-hover"
            onClick={() => escFunction()}
          >
            X
          </button>
        </div>
      </div>
      <figure>
        <img src={imgUrl} alt="random picture" className="w-80 h-80" />
      </figure>
      <p className="card card-body text-primary-content text-md m-2">
        {content}
      </p>
    </div>
  );
};
export default EntryDetails;
