import React from "react";
import Folder from "../../assets/folder.png";
import { useNavigate } from "react-router";
const Projects = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen ml-[20%] px-10 py-10">
      <div className="">
        <h1 className="text-2xl font-semibold">Projects</h1>
      </div>
      <div className="flex mt-5">
        <p
          className="flex flex-col justify-center items-center mr-12 text-xs cursor-pointer"
          onClick={() => navigate("/projects/balink")}
        >
          <img src={Folder} alt="" className="w-[50px]" />
          Balink
        </p>
        <p
          className="flex flex-col justify-center items-center mr-10 text-xs cursor-pointer"
          onClick={() => navigate("/projects/catatan-app")}
        >
          <img src={Folder} alt="" className="w-[50px]" />
          Note-App
        </p>
        <p
          className="flex flex-col justify-center items-center mr-10 text-xs cursor-pointer"
          onClick={() => navigate("/projects/ruang-mahasiswa")}
        >
          <img src={Folder} alt="" className="w-[50px]" />
          Ruang-Mahasiswa
        </p>
        <p
          className="flex flex-col justify-center items-center text-xs cursor-pointer"
          onClick={() => navigate("/projects/nuffah-cakes")}
        >
          <img src={Folder} alt="" className="w-[50px]" />
          Nuffah Cakes
        </p>
      </div>
    </div>
  );
};

export default Projects;
