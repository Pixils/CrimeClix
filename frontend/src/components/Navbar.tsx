import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center pt-20">
      <div>
        <Link href="/">
          <h1 className="text-4xl font-bold text-indigo-600">CrimeClix</h1>
        </Link>
      </div>
      <div className="flex gap-8">
        <Link href="/criminals" className="hover:underline">Criminal Database</Link>
        <span className="text-stone-500 font-light">
          By Team <span className="font-pixel">Pixils</span> 🫰
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
