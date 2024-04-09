import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoImg from '../../../public/logo.jpg'
import profileImg from '../../../public/userprofile.jpg'
import { BiLogIn } from "react-icons/bi";


const Navbar = () => {

  const navLinks = (
    <>
      <div className='flex flex-col lg:flex-row  gap-4 items-center justify-center'>
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
          to={"/blog"}
          className={({ isActive }) =>
            isActive
              ? "bg-navColor rounded-full px-4 py-1 text-white font-medium text-base"
              : "font-medium leading-snug text-base"
          }
        >
          Blog
        </NavLink>
        <NavLink
          to={"/pricing"}
          className={({ isActive }) =>
            isActive
              ? "bg-navColor rounded-full px-4 py-1 text-white font-medium text-base"
              : "font-medium leading-snug text-base"
          }
        >
          Pricing
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
    </>
  );

  const profileLinks = (
    <>
      <div className='flex flex-col gap-3 p-2'>
        <NavLink
          to={"/profile"}
          className={({ isActive }) =>
            isActive
              ? "bg-navColor rounded-full px-4 py-1 text-white font-medium text-base"
              : "font-medium leading-snug text-base"
          }
        >
          Profile
        </NavLink>
        <NavLink
          to={"/settings"}
          className={({ isActive }) =>
            isActive
              ? "bg-navColor rounded-full px-4 py-1 text-white font-medium text-base"
              : "font-medium leading-snug text-base"
          }
        >
          Settings
        </NavLink>
        <NavLink
          to={"/logout"}
          className={({ isActive }) =>
            isActive
              ? "bg-navColor rounded-full px-4 py-1 text-white font-medium text-base"
              : "font-medium leading-snug text-base"
          }
        >
          Logout
        </NavLink>
      </div>
    </>
  );
  return (
    <header className="navbar bg-base-200">
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
            {navLinks}
          </ul>
        </div>
        <div className="flex items-center">
          <img className="hidden sm:flex w-8 h-8 rounded-full" src={logoImg} alt="" />
          <Link to={"/"} className="btn btn-ghost">
            <h2 className=" text-xl sm:text-2xl font-bold">
              Nest<span className="text-navColor">Quest</span>
            </h2>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         {navLinks}
        </ul>
      </div>

      <div className="navbar-end flex sm:space-x-4">
        <Link className="text-base font-medium hidden sm:flex gap-1">
          <span className="bg-red-200 rounded-full px-[5px] text-base font-semibold flex items-center justify-center">
            0
          </span>{" "}
          My List
        </Link>
        <Link className="btn text-base font-bold bg-navColor outline-none border-none text-white hover:bg-[#2c635f]">
          {" "}
          <BiLogIn className="text-lg" />
          Sign In
        </Link>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-16 rounded-full">
              <img alt="user image" src={profileImg} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-md bg-white rounded-box w-52"
          >
            {profileLinks}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;