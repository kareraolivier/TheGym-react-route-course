import { Outlet, Link } from "react-router-dom";
const host = () => {
  return (
    <div className="px-8">
      <nav className="flex gap-8 py-6">
        <Link className="font-semibold text-lg hover:text-green-600" to="/host">
          Dashboard
        </Link>
        <Link
          className="font-semibold text-lg hover:text-green-600"
          to="/host/income"
        >
          Income
        </Link>
        <Link
          className="font-semibold text-lg hover:text-green-600"
          to="/host/reviews"
        >
          Reviews
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default host;
