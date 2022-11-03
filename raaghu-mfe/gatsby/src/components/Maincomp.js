import React from "react";
import Banners from "../components/Banners";
import Sidebar from "../components/Sidebar";
import Elements from "../components/Elements";


const Maincomp = () => {


  return (
    <div className="container-fluid mt-5 pt-2 mx-0 px-0">
      <div className="row">
        <div id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse cust-scroll border-right">
          <Sidebar />
        </div>
        <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4 left-border">
          <Banners />

          <div className="Elements-section px-3">

            <Elements />

          </div>

        </div>
      </div>
    </div>
  );
};

export default Maincomp;
