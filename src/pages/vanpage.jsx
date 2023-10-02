import { useState, useEffect } from "react";
import VanCard from "../components/vanCard";

const Vanpage = () => {
  const [vans, setVans] = useState([]);

  const fetchVans = async () => {
    try {
      const response = await fetch("/api/vans");
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
      <div>
        <VanCard vans={vans} />
      </div>
    </div>
  );
};

export default Vanpage;
