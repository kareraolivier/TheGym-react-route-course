import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log("comp error", error);
  return (
    <div className="h-screen flex flex-col gap-5 justify-center items-center">
      <h1 className="text-5xl font-bold text-green-600 ">{error.name}</h1>
      <p className="text-2xl font-bold text-gray-700 ">{error.description}</p>
      <Link
        to="/"
        className="p-3 rounded-lg text-white bg-green-600 font-semibold text-lg"
      >
        Error go Back Home
      </Link>
    </div>
  );
};

export default Error;
