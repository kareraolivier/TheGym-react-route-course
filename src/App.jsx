import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Error from "./components/error";
import Vanpage, { loader as vanPageLoader } from "./pages/vanpage";
import Vandetail from "./pages/vandetail";
import Layout from "./components/Layout/layout";
import Dashboard from "./pages/host/dashboard";
import Host from "./components/Layout/host.layout";
import Vanlist from "./pages/host/vanlist";
import Vanlistdetail from "./pages/host/vanlist.datail";
import Reviews from "./pages/host/reviews";
import Photo from "./pages/host/pricing/photo";
import Details from "./pages/host/pricing/details";
import Pricing from "./pages/host/pricing/pricing";
import Income from "./pages/host/income";
import PageNotFound from "./pages/404";
import "./components/server/server";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="*" element={<PageNotFound />} />
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="vans"
          element={<Vanpage />}
          loader={vanPageLoader}
          errorElement={<Error />}
        />
        <Route path="vans/:id" element={<Vandetail />} />
        <Route path="host" element={<Host />}>
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="vans" element={<Vanlist />} />
          <Route path="vans/:id" element={<Vanlistdetail />}>
            <Route index element={<Details />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="photo" element={<Photo />} />
          </Route>
        </Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
