import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../../hooks/useAdmin";
import useAuth from "../../../hooks/useAuth";

const DashBoard = () => {
  const [auth] = useAuth();
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="dashBoard-sideBar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <h2 className="text-5xl text-primary justify-center font-bold text-center mt-5">
          Welcome Dashboard
        </h2>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashBoard-sideBar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-70 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li className="text-primary font-bold    hover:text-black mr-3 p-2">
            <Link to="/dashBoard/profile">My Profile</Link>
          </li>
          {!admin && (
            <li className="text-primary font-bold   hover:text-black mr-3 p-2">
              <Link to="/dashBoard/orders">My Orders</Link>
            </li>
          )}
          {!admin && (
            <li className="text-primary font-bold    hover:text-black mr-3 p-2">
              <Link to="/dashBoard/review">Add A Reviews</Link>
            </li>
          )}

          {admin && (
            <li className="text-primary font-bold    hover:text-black mr-3 p-2">
              <Link to="/dashBoard/allOrders">Manage All Order</Link>
            </li>
          )}
          {admin && (
            <li className="text-primary font-bold    hover:text-black mr-3 p-2">
              <Link to="/dashBoard/users">All User</Link>
            </li>
          )}
          {admin && (
            <li className="text-primary font-bold    hover:text-black mr-3 p-2">
              <Link to="/dashBoard/products">Add a Product</Link>
            </li>
          )}
          {admin && (
            <li className="text-primary font-bold    hover:text-black mr-3 p-2">
              <Link to="/dashBoard/allProducts">Manage Products</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
