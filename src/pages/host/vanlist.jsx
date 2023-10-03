import { useState, useEffect } from "react";
import VanCard from "../../components/vanListCard";

const Vanlist = () => {
  const [vans, setVans] = useState([]);

  const fetchVans = async () => {
    try {
      const response = await fetch("/api/host/vans");
      const data = await response.json();
      setVans(data.vans);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchVans();
  }, []);
  return (
    <div>
      <div className="">
        <VanCard vans={vans} />
      </div>
    </div>
  );
};

export default Vanlist;
