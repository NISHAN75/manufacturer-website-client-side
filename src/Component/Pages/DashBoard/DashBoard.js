import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="dashBoard-sideBar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <h2 className="text-5xl text-primary justify-center font-bold text-center mt-5">
          Welcome Dashboard
        </h2>
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="dashBoard-sideBar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li className="text-primary font-bold  active:bg-emerald-700 focus:outline-none focus:ring focus:ring-emerald-400  hover:text-black mr-3 p-2">
            <Link to="/dashBoard">Sidebar Item 1</Link>
          </li>
          <li className="text-primary font-bold  active:bg-emerald-700 focus:outline-none focus:ring focus:ring-emerald-400  hover:text-black mr-3 p-2">
            <Link to="/dashBoard/review">Sidebar Item 2</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
