import React from "react";
import Gambar from "../../../assets/greenleaf.png";
const Balink = () => {
  return (
    <div className="w-full h-screen ml-[20%] px-10 py-10">
      <div className="mb-5">
        <h1 className="text-2xl font-semibold">Balink</h1>
      </div>
      <div className="max-w-[50%]">
        <p className="text-sm">
          Balink merupakan website informasi dan jual beli seputar tradisional
          bali, website ini dikhususkan untuk admin saja. jadi admin dapat
          menambahkan, mengahapus, mengubah dan mengedit data informasi yang
          akan di masukan ke dalam balink ini agar dapat di lihat oleh user
          nanti pada saat membuka aplikasi.
        </p>
      </div>
      <div className="w-full mt-3">
        <div className="w-[250px] bg-white shadow-lg p-5">
          <img src={Gambar} alt="" className="w-[200px] h-[200px]" />
          <h2 className="text-lg font-semibold mb-2">Balink</h2>
          <p className="text-xs mb-2">
            Website informasi tentang budaya tradisional bali
          </p>
          <a
            href="https://website-balink.vercel.app/"
            target="_blank"
            className="py-1 px-5 bg-green-700 text-sm rounded-sm text-white"
          >
            Show
          </a>
        </div>
      </div>
    </div>
  );
};

export default Balink;
