import React from 'react';
import logo from "../../../public/logo.jpg";
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <footer
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="footer p-10 bg-[#e6edeb] text-base-content"
      >
        <aside>
          <div className="flex items-center">
            <img src={logo} alt="" className="w-10 h-10 rounded-full" />
            <Link to={"/"} className="btn btn-ghost">
              <h2 className=" text-xl sm:text-2xl font-bold">
                Nest<span className="text-navColor">Quest</span>
              </h2>
            </Link>
          </div>
          <p>
            Southwark Council, PO Box 64529,
            <br />
            London SE1P 5LX
          </p>
          <div className="flex items-center gap-x-2">
            <FaPhone />
            <p>07-333-433-335</p>
          </div>
          <div className="flex items-center gap-x-2">
            <FaEnvelope />
            <p>support@nest-quest.com</p>
          </div>
          <div></div>
        </aside>
        <nav>
          <h6 className="footer-title">QUICK LINKS</h6>
          <Link to={"/"} className="link link-hover">
            Home
          </Link>
          <Link to={"/about"} className="link link-hover">
            About
          </Link>
          <Link to={"/services"} className="link link-hover">
            Services
          </Link>
          <Link to={"/testimonials"} className="link link-hover">
            Testimonials
          </Link>
          <Link to={"/contact"} className="link link-hover">
            Contact
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;