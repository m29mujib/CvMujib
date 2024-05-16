import React, { useState } from "react";
import { Link } from "react-router-dom";
import PanahKanan from "../../assets/right-chevron.png";
import PanahBawah from "../../assets/down-arrow.png";
import About from "../../assets/about.png";
import Contact from "../../assets/phone-call.png";
import Resume from "../../assets/schedule.png";
import Blog from "../../assets/blog.png";
import M from "../../assets/1.jpeg";
import U from "../../assets/2.jpeg";
import J from "../../assets/3.jpeg";
import I from "../../assets/4.jpeg";
import B from "../../assets/5.jpeg";
const Home = () => {
  const [openDropDownAcces, setOpenDropDownAcces] = useState(false);
  const [openDropDown, setOpenDropDown] = useState(false);
  return (
    <div className="w-full h-full flex flex-col justify-start ml-[20%] py-5 px-2">
      <p className="cursor-pointer flex-wrap w-full">
        <div
          className="nl"
          onClick={() => setOpenDropDownAcces((prev) => !prev)}
        >
          <p className="text-sm flex p-5">
            <img
              src={!openDropDownAcces ? PanahBawah : PanahKanan}
              className="w-[20px] mr-2"
            />
            Quick Access
          </p>
        </div>
        {!openDropDownAcces && (
          <div className="flex flex-wrap w-full px-2">
            <Link
              to="/about"
              className="py-5 px-16 mr-3 bg-slate-100 text-sm rounded-sm flex"
            >
              <img src={About} alt="" className="w-[30px] mr-2" /> About
            </Link>
            <Link
              to="/projects"
              className="py-5 px-16 mr-3 bg-slate-100 text-sm rounded-sm flex"
            >
              <img src={Resume} alt="" className="w-[30px] mr-2" /> Projects
            </Link>
            <Link
              to="/blogs"
              className="py-5 px-16 mr-3 bg-slate-100 text-sm rounded-sm flex"
            >
              <img src={Blog} alt="" className="w-[30px] mr-2" /> Blogs
            </Link>
            <Link
              to="/contacts"
              className="py-5 px-16 bg-slate-100 text-sm rounded-sm flex"
            >
              <img src={Contact} alt="" className="w-[30px] mr-2" /> Contacts
            </Link>
          </div>
        )}
      </p>

      <p className="cursor-pointer flex-wrap w-full mt-5">
        <div className="nl" onClick={() => setOpenDropDown((prev) => !prev)}>
          <p className="text-sm flex p-5">
            <img
              src={!openDropDown ? PanahBawah : PanahKanan}
              className="w-[20px] mr-2"
            />
            Images
          </p>
        </div>
        {!openDropDown && (
          <div className="flex flex-wrap w-full px-2 mt-5">
            <img
              src={M}
              alt=""
              className="w-[180px] h-[200px]  border border-white hover:scale-110 transition-all duration-300"
            />
            <img
              src={U}
              alt=""
              className="w-[180px] h-[200px] border border-white hover:scale-110 transition-all duration-300"
            />
            <img
              src={J}
              alt=""
              className="w-[180px] h-[200px] border border-white hover:scale-110 transition-all duration-300"
            />
            <img
              src={I}
              alt=""
              className="w-[180px] h-[200px] border border-white hover:scale-110 transition-all duration-300"
            />
            <img
              src={B}
              alt=""
              className="w-[180px] h-[200px] border border-white hover:scale-110 transition-all duration-300"
            />
          </div>
        )}
      </p>
    </div>
  );
};

export default Home;
