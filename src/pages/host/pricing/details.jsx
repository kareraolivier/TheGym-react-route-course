import { useOutletContext } from "react-router-dom";
const Details = () => {
  const { vansdetails } = useOutletContext();
  return (
    <div className="px-6 pb-6">
      <h4 className="font-bold text-lg my-2">
        Name: <span className="font-normal">{vansdetails.name}</span>
      </h4>
      <h4 className="font-bold text-lg my-2">
        Category: <span className="font-normal">{vansdetails.type}</span>
      </h4>
      <h4 className="font-bold text-lg my-2">
        Description:
        <span className="font-normal">{vansdetails.description}</span>
      </h4>
      <h4 className="font-bold text-lg my-2">
        Visibility: <span className="font-normal">Public</span>
      </h4>
    </div>
  );
};

export default Details;
