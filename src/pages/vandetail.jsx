import { useState, useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
const Vandetail = () => {
  const [vansdetails, setVansdetails] = useState({});
  const location = useLocation();
  console.log("first", location);
  const param = useParams();
  useEffect(() => {
    const fetchVanDetails = async () => {
      try {
        const response = await fetch(`/api/vans/${param.id}`);
        const data = await response.json();
        setVansdetails(data.vans);
      } catch (error) {
        console.error(error);
      }
    };
    fetchVanDetails();
  }, [param.id]);

  const search = location.state?.search || "";
  const type = location.state?.type || "all";
  console.log(search);
  return (
    <div className="p-4">
      <Link to={`..${search}`} relative="path">
        &larr; <span>Back to {type} vans</span>
      </Link>
      {vansdetails ? (
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
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default Vandetail;
