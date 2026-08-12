const Header = ({ handleNewEntry }) => {
  return (
    <header>
      <div className="navbar bg-primary flex justify-between">
        <h1 className="text-2xl text-primary-content">GedankenSalat</h1>
        <button
          className="btn btn-secondary"
          onClick={() => {
            handleNewEntry("new");
          }}
        >
          + Add entry
        </button>
      </div>
    </header>
  );
};
export default Header;
