import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import { Outlet } from "react-router-dom";
const layout = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default layout;
