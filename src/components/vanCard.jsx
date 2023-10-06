import { Link } from "react-router-dom";
const vanCard = ({ vans, searchParams }) => {
  return (
    <>
      <div className="flex flex-wrap gap-4 justify-center py-8">
        {vans?.map((van) => (
          <div
            key={van.id}
            className="w-72 cursor-pointer shadow-lg hover:shadow-xl rounded-lg"
          >
            <Link to={van.id} state={{ search: `?${searchParams.toString()}` }}>
              <div className=" p-2">
                <img src={van.imageUrl} alt={van.name} className="rounded-lg" />
                <h1 className="font-semibold">{van.name}</h1>
                <p className="text-green-600 font-semibold py-2">
                  <span className="font-bold">${van.price}</span>
                  /day
                </p>
                <p
                  className={`${van.type == "simple" ? "bg-amber-600" : ""}
                  ${van.type == "rugged" ? "bg-cyan-600" : ""}
                  ${
                    van.type == "luxury" ? "bg-green-600" : ""
                  } text-white  p-2 fo rounded-lg w-1/3 text-center font-semibold`}
                >
                  {van.type}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default vanCard;
