import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import { signOut } from "firebase/auth";

const Header = () => {
  const [auth] = useAuth();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
    navigate("/login");
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link
                to="/home"
                className="text-black font-bold hover:bg-emerald-400 active:bg-emerald-700 focus:outline-none focus:ring focus:ring-emerald-400  hover:text-white mr-3 p-2"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-black font-bold hover:bg-emerald-400 active:bg-emerald-700 focus:outline-none focus:ring focus:ring-emerald-400  hover:text-white mr-3 p-2"
              >
                ABOUT
              </Link>
            </li>
            <li>
              
            </li>
            <li>
              <Link
                to="/blog"
                className="text-black font-bold hover:bg-emerald-400 active:bg-emerald-700 focus:outline-none focus:ring focus:ring-emerald-400  hover:text-white mr-3 p-2"
              >
                BLOG
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                className="text-black font-bold hover:bg-emerald-400 active:bg-emerald-700 focus:outline-none focus:ring focus:ring-emerald-400  hover:text-white mr-3 p-2"
              >
                CONTACT
              </Link>
            </li>
            {user && (
              <li>
                <Link
                  to="/dashBoard"
                  className="text-black font-bold hover:bg-emerald-400 mb-5 lg:mb-0 active:bg-emerald-700 focus:outline-none focus:ring focus:ring-emerald-400  hover:text-white mr-3 p-2"
                >
                  Dashboard
                </Link>
              </li>
            )}
            <li>
              {user ? (
                <button onClick={logout} className="btn btn-primary text-white">
                  Log Out
                </button>
              ) : (
                <Link
                  to="/login"
                  className="text-black font-bold hover:bg-emerald-400 active:bg-emerald-700 focus:outline-none focus:ring focus:ring-emerald-400  hover:text-white mr-3 p-2"
                >
                  LOGIN
                </Link>
              )}
            </li>
          </ul>
        </div>
        <span className="text-3xl font-bold text-emerald-400 ">
          BicyclePlus
        </span>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link
              to="/home"
              className="text-black font-bold hover:bg-emerald-400 active:bg-emerald-700 focus:outline-none focus:ring focus:ring-emerald-400  hover:text-white mr-3 p-2"
            >
              HOME
            </Link>
          </li>
          <li>
            
            <Link
              to="/myProfile"
              className="text-black font-bold hover:bg-emerald-400 active:bg-emerald-700 focus:outline-none focus:ring focus:ring-emerald-400  hover:text-white mr-3 p-2"
            >
              My Profile
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="text-black font-bold hover:bg-emerald-400 active:bg-emerald-700 focus:outline-none focus:ring focus:ring-emerald-400  hover:text-white mr-3 p-2"
            >
              BLOG
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              className="text-black font-bold hover:bg-emerald-400 active:bg-emerald-700 focus:outline-none focus:ring focus:ring-emerald-400  hover:text-white mr-3 p-2"
            >
              CONTACT
            </Link>
          </li>
          {user && (
            <li>
              <Link
                to="/dashBoard"
                className="text-black font-bold hover:bg-emerald-400 active:bg-emerald-700 focus:outline-none focus:ring focus:ring-emerald-400  hover:text-white mr-3 p-2"
              >
                Dashboard
              </Link>
            </li>
          )}
          <li>
            {user ? (
              <button onClick={logout} className="btn btn-primary text-white">
                Log Out
              </button>
            ) : (
              <Link
                to="/login"
                className="text-black font-bold hover:bg-emerald-400 active:bg-emerald-700 focus:outline-none focus:ring focus:ring-emerald-400  hover:text-white mr-3 p-2"
              >
                LOGIN
              </Link>
            )}
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <label
          tabIndex="1"
          htmlFor="dashBoard-sideBar"
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Header;
