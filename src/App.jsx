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
import Vandetail, { loader as vanDetailLoader } from "./pages/vandetail";
import Layout from "./components/Layout/layout";
import Dashboard from "./pages/host/dashboard";
import Host from "./components/Layout/host.layout";
import Vanlist, { loader as vanPageListLoader } from "./pages/host/vanlist";
import Vanlistdetail, {
  loader as vanPageListDetailLoader,
} from "./pages/host/vanlist.datail";
import Reviews from "./pages/host/reviews";
import Photo from "./pages/host/pricing/photo";
import Details from "./pages/host/pricing/details";
import Pricing from "./pages/host/pricing/pricing";
import Income from "./pages/host/income";
import LoginPage, {
  loader as loginPageLoader,
  action as loginAction,
} from "./pages/loginPage";
import PageNotFound from "./pages/404";
import { AuthRequired } from "./components/auth/authRequired";
import "./components/server/server";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="*" element={<PageNotFound />} />
        <Route index element={<Home />} />

        <Route
          path="about"
          element={<About />}
          loader={async ({ request }) => await AuthRequired(request)}
        />
        <Route
          path="/login"
          element={<LoginPage />}
          loader={loginPageLoader}
          action={loginAction}
        />
        <Route
          path="vans"
          element={<Vanpage />}
          errorElement={<Error />}
          loader={vanPageLoader}
        />
        <Route
          path="vans/:id"
          element={<Vandetail />}
          loader={vanDetailLoader}
        />
        <Route path="host" element={<Host />}>
          <Route
            index
            element={<Dashboard />}
            loader={async ({ request }) => await AuthRequired(request)}
          />
          <Route
            path="income"
            element={<Income />}
            loader={async ({ request }) => await AuthRequired(request)}
          />
          <Route
            path="reviews"
            element={<Reviews />}
            loader={async ({ request }) => await AuthRequired(request)}
          />
          <Route
            path="vans"
            element={<Vanlist />}
            errorElement={<Error />}
            loader={vanPageListLoader}
          />
          <Route
            path="vans/:id"
            element={<Vanlistdetail />}
            loader={vanPageListDetailLoader}
          >
            <Route
              index
              element={<Details />}
              loader={async ({ request }) => await AuthRequired(request)}
            />
            <Route
              path="pricing"
              element={<Pricing />}
              loader={async ({ request }) => await AuthRequired(request)}
            />
            <Route
              path="photo"
              element={<Photo />}
              loader={async ({ request }) => await AuthRequired(request)}
            />
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
