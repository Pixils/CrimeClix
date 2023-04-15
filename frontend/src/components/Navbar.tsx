const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <div>
        <h1 className="text-4xl font-bold text-indigo-600">CrimeClix</h1>
      </div>
      <div>
        <span className="text-stone-500 font-light">
          By Team <span className="font-pixel">Pixils</span> 🫰
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
