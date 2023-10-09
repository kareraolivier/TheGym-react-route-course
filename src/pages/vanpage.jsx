import VanCard from "../components/vanCard";
import { useSearchParams, useLoaderData } from "react-router-dom";
import { fetchVans } from "../components/api";
import { AuthRequired } from "../components/auth/authRequired";

export const loader = async () => {
  await AuthRequired();
  return fetchVans();
};

const Vanpage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filteredType = searchParams.get("type");
  let vans = useLoaderData();

  //filtering van
  const displayedVans = filteredType
    ? vans?.filter((van) => van.type === filteredType)
    : vans;

  //conditional searchParams filter
  const hundleFilterChange = (key, value) => {
    setSearchParams((prev) => {
      if (value === null) {
        prev.delete(key);
      } else {
        prev.set(key, value);
      }
      return prev;
    });
  };

  return (
    <div>
      <div className="px-6">
        <h1 className="text-3xl text-gray-500 font-bold py-5 text-center">
          Explore our vans options
        </h1>
        <ul className="flex flex-wrap justify-center gap-5">
          {filteredType && (
            <li
              onClick={() => hundleFilterChange("type", null)}
              className="px-3 py-2 font-semibold text-lg text-white bg-green-600 rounded-lg cursor-pointer"
            >
              All
            </li>
          )}
          {[...new Set(vans?.map((item) => item.type))].map((van, index) => (
            <li
              onClick={() => hundleFilterChange("type", van)}
              key={index}
              className={`${van == "simple" ? "bg-amber-600" : ""}
                  ${van == "rugged" ? "bg-cyan-600" : ""}
                  ${van == "luxury" ? "bg-green-600" : ""} 
                  px-3 py-2 font-semibold text-lg text-white  rounded-lg cursor-pointer`}
            >
              {van}
            </li>
          ))}
        </ul>

        <VanCard vans={displayedVans} searchParams={searchParams} />
      </div>
    </div>
  );
};

export default Vanpage;
