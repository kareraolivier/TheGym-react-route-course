import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between py-6 px-10 shadow-lg fixed w-full bg-white">
        <div>
          <Link to="/" className="font-bold text-2xl text-green-600 ">
            LOGO
          </Link>
        </div>
        <div className="flex gap-8">
          <Link to="/" className="font-semibold text-lg hover:text-green-600">
            Home
          </Link>
          <Link
            to="/vans"
            className="font-semibold text-lg hover:text-green-600"
          >
            Vans
          </Link>
          <Link
            to="/about"
            className="font-semibold text-lg hover:text-green-600"
          >
            About
          </Link>
          <Link
            to="/host"
            className="font-semibold text-lg hover:text-green-600"
          >
            Host
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
