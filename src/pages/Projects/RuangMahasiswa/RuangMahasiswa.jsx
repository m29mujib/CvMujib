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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum odio
          nulla dicta! Doloremque temporibus, in sapiente quasi cupiditate
          eaque, error excepturi unde, officia deleniti eum nam maiores. Autem
          vitae itaque error obcaecati velit commodi soluta! Laudantium
          quisquam, accusamus, dolor eaque exercitationem, tempore facere
          consectetur harum nobis deserunt praesentium? Nesciunt, error eum eius
          beatae dolorem aut molestias quos debitis expedita vitae similique
          possimus culpa consectetur illum mollitia consequuntur dignissimos.
          Laudantium, repudiandae? Pariatur, optio illo. Tenetur quibusdam neque
          aperiam odio fugit est sequi repellat beatae quam ipsum. Minus, earum
          impedit sunt dolore deserunt provident. Nihil ex nulla exercitationem
          iste quas, iusto doloremque.
        </p>
      </div>
      <div className="w-full">
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
