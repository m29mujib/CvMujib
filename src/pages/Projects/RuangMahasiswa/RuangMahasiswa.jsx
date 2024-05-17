import React from "react";
import Gambar from "../../../assets/greenleaf.png";
const RuangMahasiswa = () => {
  return (
    <div className="w-full h-screen ml-[20%] px-10 py-10">
      <div className="mb-5">
        <h1 className="text-2xl font-semibold">Ruang Mahasiswa</h1>
      </div>
      <div className="max-w-[50%]">
        <p className="text-sm">
          Website yang berisi informasi akademik bagi mahasiswa yang baru masuk
          atau udah mau wisuda. jadi website ini bertujuan agar mahasiswa tidak
          ketinggalan informasi penting tentang pengumuman ujian nasional,
          pengambilan ijazah, melihat hasil ujian dan lain lain
        </p>
      </div>
      <div className="w-full mt-3">
        <div className="w-[250px] bg-white shadow-lg p-5">
          <img src={Gambar} alt="" className="w-[200px] h-[200px]" />
          <h2 className="text-lg font-semibold mb-2">Ruang Mahasiswa</h2>
          <p className="text-xs mb-2">Website informasi tentang mahasiswa</p>
          <a
            href="https://ruang-mahasiswa.vercel.app/"
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

export default RuangMahasiswa;
