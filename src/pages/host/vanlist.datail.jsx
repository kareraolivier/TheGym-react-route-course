import { fetchVansList } from "../../components/api";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import VanListDetailLayout from "../../components/Layout/vanlistdetail.layout";
import { AuthRequired } from "../../components/auth/authRequired";
// eslint-disable-next-line react-refresh/only-export-components
export const loader = async ({ params, request }) => {
  await AuthRequired(request);
  return fetchVansList(params.id);
};

const Vanlistdatail = () => {
  let vansdetails = useLoaderData();

  return (
    <>
      <div className="p-4">
        <Link
          to=".."
          relative="path"
          className="p-4 font-bold text-lg text-green-600 my-6"
        >
          back
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
            <button className="bg-green-600 p-3 text-lg text-white font-bold rounded-lg my-4">
              Rent this van
            </button>
          </div>
        </div>
      </div>
      <VanListDetailLayout />
      <Outlet context={{ vansdetails }} />
    </>
  );
};

export default Vanlistdatail;
