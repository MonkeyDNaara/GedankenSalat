const Header = ({ handleNewEntry }) => {
  const handleNewEntryBtn = () => {
    handleNewEntry("new");
  };

  return (
    <header>
      <div className="navbar bg-primary flex justify-between">
        <h1 className="text-3xl text-primary-content px-2">GedankenSalat</h1>
        <button
          className="btn btn-secondary"
          onClick={() => {
            handleNewEntryBtn();
          }}
        >
          + Add entry
        </button>
      </div>
    </header>
  );
};
export default Header;
