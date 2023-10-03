import { NavLink } from "react-router-dom";
import { vanlistdata } from "./layout.links";

const VanListDetailLayout = () => {
  return (
    <div className="px-8">
      <nav className="flex gap-8 py-6">
        {vanlistdata.map((data) => (
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
    </div>
  );
};

export default VanListDetailLayout;
