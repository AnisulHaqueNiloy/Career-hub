import { NavLink } from "react-router-dom";
import "../index.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { FaRegCircle } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
const Header = () => {
  const { user, logout } = useContext(AuthContext);

  const hlogout = () => {
    logout()
      .then(() => {
        console.log("user log out");
      })
      .catch();
  };
  const link = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/profile">Profile</NavLink>
      </li>

      {user ? (
        <li>
          {" "}
          <NavLink to="/courses">Courses</NavLink>
        </li>
      ) : (
        ""
      )}
    </>
  );
  return (
    <div className=" ">
      <div className="navbar  bg-[#31645E] text-white font-oswald items-center">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden "
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm text-black dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <a className="font-robo text-2xl text-black">Career Counseling</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end gap-3 ">
          {user ? (
            <div
              className="tooltip flex flex-col md:flex-row gap-2 tooltip-bottom mr-4"
              data-tip={user?.displayName}
            >
              <img
                className="w-12 h-12 rounded-full   "
                src={user?.photoURL}
                alt=""
              />
              <button
                onClick={hlogout}
                className="items-center cursor-pointer text-center"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row gap-2">
              <p className="text-3xl text-white">
                <FaUserCircle></FaUserCircle>
              </p>
              <NavLink
                to="/auth/login"
                className="items-center  cursor-pointer text-center"
              >
                Login
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
