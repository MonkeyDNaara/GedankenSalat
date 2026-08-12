const Header = () => {
  return (
    <header>
      <div className="navbar bg-primary flex justify-between">
        <h1 className="text-2xl text-primary-content">GedankenSalat</h1>
        <button className="btn btn-secondary">+ Add entry</button>
      </div>
    </header>
  );
};
export default Header;
