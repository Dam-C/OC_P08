import { Outlet } from "react-router-dom";
import { Banner, Footer } from "./_comp_index";

const SharedLayout = () => {
  return (
    <div>
      <Banner />
      <Outlet />
      <Footer />
    </div>
  );
};

export default SharedLayout;
