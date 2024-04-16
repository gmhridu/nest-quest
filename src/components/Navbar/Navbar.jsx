import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logoImg from "../../../public/logo.jpg";
import { BiLogIn } from "react-icons/bi";
import { AuthContext } from "../../Providers/AuthProviders";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-tooltip/dist/react-tooltip.css";
import { FaCircleUser } from "react-icons/fa6";

const Navbar = () => {
  const { user, logOut, updateUserProfile } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState("");
  const [hoverName, setHoverName] = useState("")
  const [displayEmail, setDisplayEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(!!user); 

  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName || "");
      setHoverName(user.displayName || "")
      setDisplayEmail(user.email || "");
      setPhotoURL(user.photoURL || "");
      console.log(user.displayName);
      setIsUserLoggedIn(true);
    } else {
      setDisplayName("");
      setDisplayEmail("");
      setPhotoURL("");
      setIsUserLoggedIn(false); 
    }
  }, [user]);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        notifyLogOut();
        setIsUserLoggedIn(false); 
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  const handleUpdateProfile = () => {
    updateUserProfile(displayName, photoURL)
      .then(() => {
        toast.success("Profile updated successfully!");
      })
      .catch(() => {
        toast.error("Failed to update profile. Please try again.");
      });
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <header
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1000"
      className="navbar bg-base-200"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-white rounded-box w-52"
          >
            <div className="flex flex-col lg:flex-row  gap-6 items-center justify-center">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-navColor rounded-full px-4 py-1 text-white font-medium text-base"
                    : "font-medium leading-snug text-base"
                }
              >
                Home
              </NavLink>
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-navColor rounded-full px-4 py-1 text-white font-medium text-base"
                    : "font-medium leading-snug text-base"
                }
              >
                About
              </NavLink>
              <NavLink
                to={"/services"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-navColor rounded-full px-4 py-1 text-white font-medium text-base"
                    : "font-medium leading-snug text-base"
                }
              >
                Services
              </NavLink>
              <NavLink
                to={"/testimonials"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-navColor rounded-full px-4 py-1 text-white font-medium text-base"
                    : "font-medium leading-snug text-base"
                }
              >
                Testimonials
              </NavLink>
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-navColor rounded-full px-4 py-1 text-white font-medium text-base"
                    : "font-medium leading-snug text-base"
                }
              >
                Contact
              </NavLink>
            </div>
          </ul>
        </div>
        <div className="flex items-center">
          <img
            className="hidden sm:flex w-8 h-8 rounded-full"
            src={logoImg}
            alt=""
          />
          <Link to={"/"} className="btn btn-ghost">
            <h2 className=" text-xl sm:text-2xl font-bold">
              Nest<span className="text-navColor">Quest</span>
            </h2>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <div className="flex flex-col lg:flex-row  gap-6 items-center justify-center">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "bg-navColor rounded-full px-4 py-1 text-white font-medium text-base"
                  : "font-medium leading-snug text-base"
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive
                  ? "bg-navColor rounded-full px-4 py-1 text-white font-medium text-base"
                  : "font-medium leading-snug text-base"
              }
            >
              About
            </NavLink>
            <NavLink
              to={"/services"}
              className={({ isActive }) =>
                isActive
                  ? "bg-navColor rounded-full px-4 py-1 text-white font-medium text-base"
                  : "font-medium leading-snug text-base"
              }
            >
              Services
            </NavLink>
            <NavLink
              to={"/testimonials"}
              className={({ isActive }) =>
                isActive
                  ? "bg-navColor rounded-full px-4 py-1 text-white font-medium text-base"
                  : "font-medium leading-snug text-base"
              }
            >
              Testimonials
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                isActive
                  ? "bg-navColor rounded-full px-4 py-1 text-white font-medium text-base"
                  : "font-medium leading-snug text-base"
              }
            >
              Contact
            </NavLink>
          </div>
        </ul>
      </div>
      <div className="navbar-end flex sm:space-x-4">
        {user ? (
          <div displayEmail={() => setDisplayEmail(user.email || "")}>
            <span className="text-lg font-medium">{displayEmail}</span>
          </div>
        ) : (
          <Link
            to={"/login"}
            className="btn text-base font-bold bg-navColor outline-none border-none text-white hover:bg-[#2c635f]"
          >
            {" "}
            <BiLogIn className="text-lg" />
            Sign In
          </Link>
        )}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
            onClick={toggleDropdown}
          >
            <div className="rounded-full">
              {user ? (
                <div
                  onMouseOver={() => setHoverName(user?.displayName || "")}
                  onMouseOut={() => setHoverName("")}
                >
                  {photoURL ? (
                    <img
                      className="w-16 hover:{displayName}"
                      alt="user image"
                      src={photoURL}
                    />
                  ) : (
                    <FaCircleUser className="text-3xl flex items-center justify-center" />
                  )}
                  <span
                    className="text-xs text-center text-nowrap absolute -bottom-5 right-0 bg-black text-white px-3 py-0.5 rounded-md"
                    data-tip={hoverName}
                  >
                    {hoverName}
                  </span>
                </div>
              ) : (
                " "
              )}
            </div>
          </div>
          {user && isDropdownVisible && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 flex items-center justify-center shadow-md bg-white rounded-box w-60"
            >
              <div className="flex flex-col gap-3 p-2">
                <div
                  className="flex justify-center items-center bg-black text-white font-medium rounded-full px-2"
                  displayName={() => setDisplayName(user.displayName || "")}
                >
                  <span className="text-lg font-medium text-nowrap">
                    {displayName}
                  </span>
                </div>

                <NavLink
                  onClick={handleUpdateProfile}
                  to={"/profile"}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-navColor rounded-full px-4 py-1 text-white font-medium text-base"
                      : "font-medium leading-snug text-base"
                  }
                >
                  Update Profile
                </NavLink>
                <NavLink
                  onClick={handleLogOut}
                  to={"/login"}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-navColor rounded-full px-4 py-1 text-white font-medium text-base"
                      : "font-medium leading-snug text-base"
                  }
                >
                  Logout
                </NavLink>
              </div>
            </ul>
          )}
        </div>
      </div>
      <ToastContainer />
    </header>
  );
};

export default Navbar;
