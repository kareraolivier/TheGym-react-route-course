import { Outlet, NavLink } from "react-router-dom";
import { dashborddata } from "./layout.links";
const host = () => {
  return (
    <div className="px-8">
      <nav className="flex gap-8 py-6">
        {dashborddata.map((data) => (
          <NavLink
            key={data.id}
            end
            className="font-semibold text-lg hover:text-green-600"
            to={data.link}
            style={({ isActive }) => ({
              color: isActive ? "green" : "",
              textDecoration: isActive ? "underline" : "",
            })}
          >
            {data.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
};

export default host;
