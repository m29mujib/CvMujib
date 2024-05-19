import React from "react";
import Note from "../../../assets/noteapp.png";
const CatatanApp = () => {
  return (
    <div className="w-full h-screen ml-[20%] px-10 py-10">
      <div className="mb-5">
        <h1 className="text-2xl font-semibold">Catatan App</h1>
      </div>
      <div className="max-w-[50%]">
        <p className="text-sm">
          Website ini dapat menambahkan, mengarsipkan dan menghapus catatan
          pribadi. user juga bisa mencari catatan yang akan dibuka dengan tombol
          pencarian yang ada di atas kanan.
        </p>
      </div>
      <div className="w-full mt-3">
        <div className="w-[250px] bg-white shadow-lg p-5 rounded-md">
          <img src={Note} alt="" className="w-[200px] h-[200px] rounded-md" />
          <h2 className="text-lg font-semibold mb-2">Catatan App</h2>
          <p className="text-xs mb-2">
            Website untuk menyimpan catatan pribadi
          </p>
          <a
            href="https://catatan-app-two.vercel.app/"
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

export default CatatanApp;
