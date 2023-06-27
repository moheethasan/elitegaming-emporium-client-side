import { Link, NavLink, useLocation } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import Logo from "./Logo";

const Navbar = () => {
  const user = false;

  const location = useLocation();
  const isHomeRoute = location.pathname === "/";

  const navOptions = (
    <>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "default")}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "default")}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "default")}
        to="/blog"
      >
        Blog
      </NavLink>
      {user && (
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "default")}
          to="/dashboard/home"
        >
          Dashboard
        </NavLink>
      )}
    </>
  );

  return (
    <>
      <div
        className={`navbar bg-black px-2 py-3 md:py-5 ${
          isHomeRoute ? "fixed z-10 bg-opacity-30" : ""
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden text-lime-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 px-4 py-3 shadow bg-gradient-to-r from-yellow-50 to-amber-100 rounded-lg w-40"
            >
              {navOptions}
            </ul>
          </div>
          <Logo></Logo>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-1 md:gap-5">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex gap-1 md:gap-3 items-center">
              <div
                className="tooltip tooltip-bottom"
                data-tip={
                  user.displayName ? user.displayName : "name not found"
                }
              >
                {user.photoURL ? (
                  <img
                    className="w-8 md:w-12 h-8 md:h-12 rounded-full"
                    src={user.photoURL}
                    alt="user photo"
                  />
                ) : (
                  <FaUserCircle className="text-3xl md:text-4xl" />
                )}
              </div>
              <button className="btn-primary">Logout</button>
            </div>
          ) : (
            <Link to="/login" className="btn-primary">
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
