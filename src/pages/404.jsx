import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="h-screen flex flex-col gap-5 justify-center items-center">
      <h1 className="text-5xl font-bold text-green-600 ">PageNotFound</h1>
      <Link
        to="/"
        className="p-3 rounded-lg text-white bg-green-600 font-semibold text-lg"
      >
        Not found Back Home
      </Link>
    </div>
  );
};

export default PageNotFound;
