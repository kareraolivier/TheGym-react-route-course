import { Suspense } from "react";
import { fetchVansLists } from "../../components/api";
import VanCard from "../../components/vanListCard";
import { useLoaderData, Await, defer } from "react-router-dom";
import { AuthRequired } from "../../components/auth/authRequired";

export const loader = async ({ request }) => {
  await AuthRequired(request);
  return defer({ vans: fetchVansLists() });
};
const Vanlist = () => {
  let vansListPromise = useLoaderData();

  return (
    <div>
      <div className="">
        <Suspense fallback={<p>Loading ...</p>}>
          <Await resolve={vansListPromise.vans}>
            {(vans) => <VanCard vans={vans} />}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

export default Vanlist;
