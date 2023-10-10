import { Link, NavLink } from "react-router-dom";
import { navdata } from "./navdata";
const Navbar = () => {
  const Logout = () => {
    return localStorage.removeItem("logedin");
  };
  return (
    <div>
      <nav className="flex justify-between py-6 px-16 shadow-lg fixed w-full bg-white">
        <div>
          <Link to="/" className="font-bold text-2xl text-green-600 ">
            LOGO
          </Link>
        </div>
        <div className="flex gap-8">
          {navdata.map((data) => (
            <NavLink
              key={data.id}
              to={data.link}
              onClick={data.name === "Logout" && Logout}
              className="font-semibold text-lg hover:text-green-600"
              style={({ isActive }) => ({
                color: isActive ? "green" : "",
                textDecoration: isActive ? "underline" : "",
              })}
            >
              {data.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
