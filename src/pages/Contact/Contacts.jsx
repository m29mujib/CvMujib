import React from "react";
import Whatsapp from "../../assets/logo.png";

const Contacts = () => {
  return (
    <div className="w-[70%] h-screen ml-[20%] p-10">
      <div>
        <h1 className="text-2xl font-semibold">Contact</h1>
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center ">
        <img src={Whatsapp} alt="" className="w-[100px] mb-8 animate-bounce" />
        <a
          href="https://wa.me/082290401713"
          target="_blank"
          className="bg-green-500 py-3 px-20 rounded-lg text-white"
        >
          Whatsapp
        </a>
      </div>
    </div>
  );
};

export default Contacts;
