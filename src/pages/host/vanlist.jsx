import { fetchVansList } from "../../components/api";
import VanCard from "../../components/vanListCard";
import { useLoaderData } from "react-router-dom";
import { AuthRequired } from "../../components/auth/authRequired";

export const loader = async () => {
  await AuthRequired();
  return fetchVansList();
};
const Vanlist = () => {
  let vans = useLoaderData();

  return (
    <div>
      <div className="">
        <VanCard vans={vans} />
      </div>
    </div>
  );
};

export default Vanlist;
