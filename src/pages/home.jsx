import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div className="bg-home bg-no-repeat bg-cover h-screen p-4 flex flex-col justify-center items-center">
        <h1 className="text-4xl text-white font-bold">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="text-lg text-white">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link
          to="vans"
          className="text-white p-4 font-semibold bg-green-600 rounded-lg"
        >
          Find your van
        </Link>
      </div>
    </div>
  );
};

export default Home;
