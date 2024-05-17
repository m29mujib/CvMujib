import React from "react";
import Roadmap from "../../assets/roadmap.png";
import Html from "../../assets/html.png";
import Css from "../../assets/css.png";
import Javascript from "../../assets/js.png";
const Blogs = () => {
  return (
    <div className="w-full h-full ml-[20%] p-10">
      <div>
        <h1 className="text-2xl font-semibold">Blogs</h1>
      </div>
      <div className="mt-10 w-full">
        <h2 className="text-lg font-semibold">
          Apa sih syarat untuk menjadi Frontend Developer ?
        </h2>
        <p className="text-xs">Yuk, kita simak!</p>

        <img src={Roadmap} alt="" className="w-[50%] mt-10" />

        <p className="mt-10 text-sm max-w-[60%]">
          Melihat dari gambar diatas, tentunya tidak akan semudah membalikan
          telapak tangan untuk menjadi seorang Frontend Developer. Banyak syarat
          yang harus kalian pelajari diantaranya 3 basic yang wajib kalian
          pelajari yaitu HTML, CSS dan Javascript.
        </p>

        <p className="text-xl mb-5 mt-5 font-semibold">1. HTML</p>
        <p className="text-sm max-w-[60%]">
          Html kepanjangan dari Hyper text Markup Languege, kalian wajib banget
          pahamin dasar dasar dari Frontend Developer salah satunya belajar Html
          ini. Banyak Tag tag yang harus kalian ketahui sebelum lanjut ke materi
          selanjutnya.
        </p>
        <img src={Html} alt="" className="w-[50%] my-10" />
        <p className="text-sm max-w-[50%]">
          Kalian bisa pelajari materi html di
          <a
            href="https://www.w3schools.com/html/html_intro.asp"
            target="_blank"
            className="text-green-500 text-sm mx-2"
          >
            W3School
          </a>
          disana banyak materi yang harus kalian pelajari untuk menjadi basic
          dari seorang Frontend Developer.
        </p>

        <p className="text-xl mb-5 mt-5 font-semibold">2. CSS</p>
        <p className="text-sm max-w-[50%]">
          Css kepanjangan dari Cascading Style Sheet yang artinya tanpa css
          sebuah website akan terlihat jelek. Kalo bisa mimin ibaratkan Html itu
          ketika kita telanjang bulat dan Css itu pakaian kita agar terlihat
          menarik bagi orang. dalam materi ini kreatifitas kalian harus
          dimanfaatkan agar website kalian terlihat menarik
        </p>
        <img src={Css} alt="" className="w-[50%] my-10" />
        <p className="text-sm max-w-[50%]">
          Kalian bisa pelajari materi Css di
          <a
            href="https://www.w3schools.com/css/default.asp"
            target="_blank"
            className="text-green-500 text-sm mx-2"
          >
            W3School
          </a>
          disana banyak materi yang harus kalian pelajari untuk menjadi basic
          dari seorang Frontend Developer.
        </p>

        <p className="text-xl mb-5 mt-5 font-semibold">3. Javascript</p>
        <p className="text-sm max-w-[50%]">
          Sampai sini apakah kalian masih semangat untuk menjadi sorang Frontend
          Developer? jangan putus semangat karenakali ini ada materi yang super
          sure yang harus kalian pelajari selanjutnya yaitu Javascript. Kalo
          tadi kita ibaratkan Html sebagai tubuh kita tanpa pakaian lalu Css
          membuat menarik dengan memakai pakaian nya, Nah sekarang Javascript
          sebagai otak manusia nya, kita bisa jalan, lari atau loncat itu
          menggunakan Javascript.
        </p>
        <img src={Javascript} alt="" className="w-[50%] my-10" />
        <p className="text-sm max-w-[50%]">
          Kalian bisa pelajari materi Javascript di
          <a
            href="https://www.w3schools.com/js/default.asp"
            target="_blank"
            className="text-green-500 text-sm mx-2"
          >
            W3School
          </a>
          disana banyak materi yang harus kalian pelajari untuk menjadi basic
          dari seorang Frontend Developer.
        </p>

        <p className="text-sm max-w-[50%] my-10">
          Mungkin cukup sampai sini dulu informasi yang mimin berikan seputar
          cara menjadi Frontend Developer versi mimin. Nanti mimin bakal update
          terus mengenai cara kalian agar dapat menjadi seorang Frontend
          Developer. Terimakasih banyak yang udah membaca blog ini semoga dapat
          bermanfaat. Aamiin...
        </p>
      </div>
    </div>
  );
};

export default Blogs;
