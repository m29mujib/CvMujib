import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar/Sidebar";
const Layout = () => {
  return (
    <div className="w-full h-full">
      <div className="w-[20%] h-screen fixed top-0 left-0 shadow">
        <Sidebar />
      </div>
      <div className="w-full h-full overflow-x-hidden ">
        <div className="w-full h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
