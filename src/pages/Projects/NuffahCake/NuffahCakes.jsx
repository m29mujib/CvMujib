import React from "react";
import Nuffah from "../../../assets/nuffah.png";
const NuffahCakes = () => {
  return (
    <div className="w-full h-screen ml-[20%] px-10 py-10">
      <div className="mb-5">
        <h1 className="text-2xl font-semibold">Nuffahs Cakes</h1>
      </div>
      <div className="max-w-[50%]">
        <p className="text-sm">
          Website penjualan kue original yang bernama Nuffah Cakes, Jadi pembeli
          dapat melhat lihat terlebih dahulu kue apa yang akan di pesan. pembeli
          juga dapat menghapus pesanan jika merasa kurang cocok dengan kue yang
          akan dibeli
        </p>
      </div>
      <div className="w-full mt-3">
        <div className="w-[250px] bg-white shadow-lg p-5 rounded-md">
          <img src={Nuffah} alt="" className="w-[200px] h-[200px] rounded-md" />
          <h2 className="text-lg font-semibold mb-2">Nuffah Cakes</h2>
          <p className="text-xs mb-2">Website penjualan kue original</p>
          <a
            href="https://mini-projects-mujib.vercel.app/"
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

export default NuffahCakes;
