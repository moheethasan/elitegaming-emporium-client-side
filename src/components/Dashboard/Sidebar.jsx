import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../Shared/Navbar/Logo";
import useAuth from "../../hooks/useAuth";
import { MdLogout } from "react-icons/md";
import { AiFillDollarCircle, AiFillSetting } from "react-icons/ai";
import { GiTeacher, GiBookshelf } from "react-icons/gi";
import { FaBookmark, FaHome, FaUsers, FaWallet } from "react-icons/fa";
import useAdmin from "../../hooks/useAdmin";
import circle1 from "../../assets/banner/design-circle-1.webp";
import circle3 from "../../assets/banner/design-circle-3.webp";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setActive] = useState("false");
  const { user, logOut, loading } = useAuth();

  const handleToggle = () => {
    setActive(!isActive);
  };
  const handleLogOut = () => {
    logOut();
    navigate("/");
  };

  const [isAdmin] = useAdmin();

  if (loading) {
    return;
  }

  return (
    <>
      <div className="bg-black flex justify-between md:hidden items-center">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Logo />
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button btn btn-ghost text-violet-600"
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
        </button>
      </div>
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-black w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0 transition duration-200 ease-in-out`}
      >
        <div className="relative">
          <img className="absolute -top-4" src={circle1} alt="image" />
          <img
            className="absolute top-[53%] -right-28"
            src={circle3}
            alt="image"
          />
          <img
            className="absolute top-[53%] -left-32"
            src={circle3}
            alt="image"
          />
          <div className="relative z-10">
            <div className="w-full hidden md:flex py-2 justify-center items-center mx-auto rounded-lg">
              <Logo />
            </div>
            <Link
              to="/dashboard/profile"
              className="flex flex-col items-center mt-6 -mx-2"
            >
              <img
                className="object-cover w-16 h-16 mx-2 rounded-full hover:shadow-2xl"
                src={user?.photoURL}
                alt="avatar"
                referrerPolicy="no-referrer"
              />
              <h4 className="mx-2 mt-2 font-medium text-white">
                {user?.displayName}
              </h4>
              <p className="mx-2 mt-1 text-sm font-medium text-white">
                {user?.email}
              </p>
            </Link>
          </div>
          <div className="flex flex-col justify-between flex-1 mt-8">
            <nav>
              {isAdmin ? (
                <>
                  <NavLink
                    to="/dashboard/myProducts"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 mt-2 rounded-lg transition-colors duration-300 transform hover:bg-gradient-to-r from-blue-600 to-violet-600 text-white ${
                        isActive
                          ? "bg-gradient-to-r from-blue-600 to-violet-600"
                          : "bg-transparent"
                      }`
                    }
                  >
                    <GiBookshelf className="w-5 h-5" />
                    <span className="mx-2 font-medium">My Products</span>
                  </NavLink>
                  <NavLink
                    to="/dashboard/addProduct"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 mt-2 rounded-lg transition-colors duration-300 transform hover:bg-gradient-to-r from-blue-600 to-violet-600 text-white ${
                        isActive
                          ? "bg-gradient-to-r from-blue-600 to-violet-600"
                          : "bg-transparent"
                      }`
                    }
                  >
                    <GiBookshelf className="w-5 h-5" />
                    <span className="mx-2 font-medium">Add Product</span>
                  </NavLink>

                  <NavLink
                    to="/dashboard/manageUsers"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 mt-2 rounded-lg transition-colors duration-300 transform hover:bg-gradient-to-r from-blue-600 to-violet-600 text-white ${
                        isActive
                          ? "bg-gradient-to-r from-blue-600 to-violet-600"
                          : "bg-transparent"
                      }`
                    }
                  >
                    <FaUsers className="w-5 h-5" />
                    <span className="mx-2 font-medium">Manage Users</span>
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink
                    to="/dashboard/myCart"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 mt-2 rounded-lg transition-colors duration-300 transform hover:bg-gradient-to-r from-blue-600 to-violet-600 text-white ${
                        isActive
                          ? "bg-gradient-to-r from-blue-600 to-violet-600"
                          : "bg-transparent"
                      }`
                    }
                  >
                    <FaBookmark className="w-5 h-5" />
                    <span className="mx-2 font-medium">My Cart</span>
                  </NavLink>
                  <NavLink
                    to="/dashboard/purchasedProducts"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 mt-2 rounded-lg transition-colors duration-300 transform hover:bg-gradient-to-r from-blue-600 to-violet-600 text-white ${
                        isActive
                          ? "bg-gradient-to-r from-blue-600 to-violet-600"
                          : "bg-transparent"
                      }`
                    }
                  >
                    <AiFillDollarCircle className="w-5 h-5" />
                    <span className="mx-2 font-medium">Purchased Products</span>
                  </NavLink>
                  <NavLink
                    to="/dashboard/paymentHistory"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 mt-2 rounded-lg transition-colors duration-300 transform hover:bg-gradient-to-r from-blue-600 to-violet-600 text-white ${
                        isActive
                          ? "bg-gradient-to-r from-blue-600 to-violet-600"
                          : "bg-transparent"
                      }`
                    }
                  >
                    <FaWallet className="w-5 h-5" />
                    <span className="mx-2 font-medium">Payment History</span>
                  </NavLink>
                </>
              )}
              <div className="h-px bg-white mx-auto mt-2"></div>
              <NavLink
                className="flex items-center px-4 py-2 mt-2 rounded-lg transition-colors duration-300 transform hover:bg-gradient-to-r from-blue-600 to-violet-600 text-white"
                to="/"
              >
                <FaHome className="w-5 h-5" />
                <span className="mx-2 font-medium">Home</span>
              </NavLink>
              <NavLink
                className="flex items-center px-4 py-2 mt-1 rounded-lg transition-colors duration-300 transform  hover:bg-gradient-to-r from-blue-600 to-violet-600 text-white"
                to="/instructors"
              >
                <GiTeacher className="w-5 h-5" />
                <span className="mx-2 font-medium">Instructors</span>
              </NavLink>
              <NavLink
                className="flex items-center px-4 py-2 mt-1 rounded-lg transition-colors duration-300 transform  hover:bg-gradient-to-r from-blue-600 to-violet-600 text-white"
                to="/classes"
              >
                <GiBookshelf className="w-5 h-5" />
                <span className="mx-2 font-medium">Classes</span>
              </NavLink>
            </nav>
          </div>
        </div>
        <div className="relative">
          <img
            className="absolute rotate-180 -bottom-4"
            src={circle1}
            alt="image"
          />
          <div className="h-px bg-white mx-auto"></div>
          <div className="relative z-10">
            <NavLink
              to="/dashboard/profile"
              className={({ isActive }) =>
                `flex items-center px-4 py-2 mt-2 rounded-lg transition-colors duration-300 transform hover:bg-gradient-to-r from-blue-600 to-violet-600 text-white ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-violet-600"
                    : "bg-transparent"
                }`
              }
            >
              <AiFillSetting className="w-5 h-5" />
              <span className="mx-2 font-medium">Profile</span>
            </NavLink>
            <button
              onClick={handleLogOut}
              className="flex w-full rounded-lg items-center px-4 py-2 mt-1 hover:bg-gradient-to-r from-blue-600 to-violet-600 text-white transition-colors duration-300 transform"
            >
              <MdLogout className="w-5 h-5" />
              <span className="mx-2 font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
