import { useOutletContext } from "react-router-dom";
const Pricing = () => {
  const { vansdetails } = useOutletContext();
  return (
    <div>
      <div className="px-6 pb-6">
        <p className=" text-xl">
          <span className="text-xl text-gray-800 font-bold my-3">
            ${vansdetails.price}
          </span>
          /day
        </p>
      </div>
    </div>
  );
};

export default Pricing;
