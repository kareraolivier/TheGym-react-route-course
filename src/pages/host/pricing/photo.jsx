import { useOutletContext } from "react-router-dom";
const Photo = () => {
  const { vansdetails } = useOutletContext();
  return (
    <div className="p-6">
      <div className="w-2/5">
        <img
          className="cursor-pointer"
          src={vansdetails.imageUrl}
          alt={vansdetails.name}
          width={100}
        />
      </div>
    </div>
  );
};

export default Photo;
