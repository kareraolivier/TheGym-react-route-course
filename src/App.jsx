import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Vanpage from "./pages/vanpage";
import Vandetail from "./pages/vandetail";
import Layout from "./components/Layout/layout";
import Dashboard from "./pages/host/dashboard";
import Host from "./components/Layout/host.layout";
import Reviews from "./pages/host/reviews";
import Income from "./pages/host/income";
import "./components/server/server";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vanpage />} />
            <Route path="vans/:id" element={<Vandetail />} />
            <Route path="host" element={<Host />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
