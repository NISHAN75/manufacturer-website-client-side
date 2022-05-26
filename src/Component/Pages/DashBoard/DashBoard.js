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
        <ul class="menu p-4 overflow-y-auto w-70 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li className="text-primary font-bold   hover:text-black mr-3 p-2">
            <Link to="/dashBoard">My Orders</Link>
          </li>
          <li className="text-primary font-bold    hover:text-black mr-3 p-2">
            <Link to="/dashBoard/review">Add A Reviews</Link>
          </li>
          <li className="text-primary font-bold    hover:text-black mr-3 p-2">
            <Link to="/dashBoard/profile">My Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
