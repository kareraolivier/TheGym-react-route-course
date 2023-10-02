import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between py-6 px-4 shadow-lg">
        <div>
          <Link to="/" className="font-bold text-2xl hover:text-green-600">
            Logo
          </Link>
        </div>
        <div className="flex gap-2">
          <Link to="/" className="font-semibold text-lg hover:text-green-600">
            Home
          </Link>
          <Link
            to="/about"
            className="font-semibold text-lg hover:text-green-600"
          >
            About
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
