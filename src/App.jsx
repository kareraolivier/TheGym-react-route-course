import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Navbar from "./components/navbar/navbar.jsx";
import Vanpage from "./pages/vanpage";
import Vandetail from "./pages/vandetail";
import "./components/server/server";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vanpage />} />
            <Route path="/vans/:id" element={<Vandetail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
