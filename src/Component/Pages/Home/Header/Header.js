import React from "react";
import { useAuthState} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import { signOut } from 'firebase/auth';

const Header = () => {
  const [auth]=useAuth()
  const [user] = useAuthState(auth);
  const navigate=useNavigate()
  const logout = () => {
    signOut(auth);
    navigate('/login')
  };
  return (
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <span class="text-3xl font-bold text-emerald-400 ">
        BicyclePlus
        </span>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
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
            <Link
              to="/shop"
              className="text-black font-bold hover:bg-emerald-400 active:bg-emerald-700 focus:outline-none focus:ring focus:ring-emerald-400  hover:text-white mr-3 p-2"
            >
              SHOP
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
          <li>
            {
              user? <button onClick={logout}  class="btn btn-primary text-white">Log Out</button> : <Link
              to="/login"
              className="text-black font-bold hover:bg-emerald-400 active:bg-emerald-700 focus:outline-none focus:ring focus:ring-emerald-400  hover:text-white mr-3 p-2"
            >
              LOGIN
            </Link>
            }
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
