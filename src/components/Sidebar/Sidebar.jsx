import React from "react";
import { Link } from "react-router-dom";
import Home from "../../assets/home-button.png";
import About from "../../assets/about.png";
import Projects from "../../assets/schedule.png";
import Blogs from "../../assets/blog.png";
import Contact from "../../assets/phone-call.png";
const Sidebar = () => {
  return (
    <div className="w-full h-full py-5 px-2">
      <div className="wrapper flex justify-center flex-col py-5 px-2">
        <Link
          to="/"
          className="p-5 hover:bg-slate-100 mb-2 text-sm rounded-lg flex"
        >
          <img src={Home} alt="" className="w-[20px] mr-5" /> Home
        </Link>
        <Link
          to="/about"
          className="p-5 hover:bg-slate-100 mb-2 text-sm rounded-lg flex"
        >
          <img src={About} alt="" className="w-[20px] mr-5" /> About
        </Link>
        <Link
          to="/projects"
          className="p-5 hover:bg-slate-100 mb-2 text-sm rounded-lg flex"
        >
          <img src={Projects} alt="" className="w-[20px] mr-5" /> Projects
        </Link>
        <Link
          to="/blogs"
          className="p-5 hover:bg-slate-100 mb-2 text-sm rounded-lg flex"
        >
          <img src={Blogs} alt="" className="w-[20px] mr-5" /> Blogs
        </Link>
        <Link
          to="/contacts"
          className="p-5 hover:bg-slate-100 text-sm rounded-lg flex"
        >
          <img src={Contact} alt="" className="w-[20px] mr-5" /> Contacts
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
