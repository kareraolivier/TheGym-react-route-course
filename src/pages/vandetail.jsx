import { Link, useLocation, useLoaderData } from "react-router-dom";
import { fetchVans } from "../components/api";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = ({ params }) => fetchVans(params.id);

const Vandetail = () => {
  const location = useLocation();
  const vansdetails = useLoaderData();

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  return (
    <div className="p-4">
      <Link to={`..${search}`} relative="path">
        &larr; <span>Back to {type} vans</span>
      </Link>
      <div className="flex flex-wrap justify-center gap-4 items-center">
        <div className="w-2/5">
          <img
            src={vansdetails.imageUrl}
            alt={vansdetails.name}
            className="w-full"
          />
        </div>

        <div className="w-2/5">
          <h2 className="font-bold text-2xl text-green-600 py-2">
            {vansdetails.name}
          </h2>
          <i className="my-2">{vansdetails.type}</i>
          <p className=" text-lg">
            <span className="text-lg text-gray-600 font-bold my-3">
              ${vansdetails.price}
            </span>
            /day
          </p>
          <p className="my-4 text-lg">{vansdetails.description}</p>
          <button className="bg-green-600 p-3 text-lg text-white font-bold rounded-lg my-4">
            Rent this van
          </button>
        </div>
      </div>
    </div>
  );
};

export default Vandetail;
