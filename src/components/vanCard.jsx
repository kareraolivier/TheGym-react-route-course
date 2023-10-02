import { Link } from "react-router-dom";
const vanCard = ({ vans }) => {
  return (
    <>
      <h1 className="text-3xl text-gray-500 font-bold py-5 text-center">
        Explore our vans options
      </h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {vans?.map((van) => (
          <div
            key={van.id}
            className="w-1/5 cursor-pointer shadow-lg hover:shadow-xl rounded-lg"
          >
            <Link to={`/vans/${van.id}`}>
              <div className=" p-2">
                <img src={van.imageUrl} alt={van.name} className="rounded-lg" />
                <h1 className="font-semibold">{van.name}</h1>
                <p className="text-green-600 font-semibold py-2">
                  ${van.price}
                  <span>/day</span>
                </p>
                <p className="text-white bg-green-600 p-2 fo rounded-lg w-1/3 text-center font-semibold">
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
