import React from "react";
import Green from "../../assets/greenleaf.png";
import Email from "../../assets/mail.png";
import Phone from "../../assets/phone-call.png";
import Instagram from "../../assets/instagram.png";
import Placeholder from "../../assets/placeholder.png";
import Linkedin from "../../assets/linkedin.png";
const About = () => {
  return (
    <div className="w-full h-screen ml-[20%] px-10 py-10 flex flex-col relative justify-evenly">
      <div className="">
        <h1 className="text-2xl font-semibold ">Tentang Saya</h1>
      </div>

      <div className="max-w-[50%]">
        <h2 className="text-xs tracking-wides">Hello everyone,</h2>
        <p className="text-sm tracking-wide">
          Nama saya Muhamad Abdul Mujib lulusan sistem informasi dari
          Universitas Bina Sarana Informatika dengan pengalaman magang sebagai
          Frontend Engineering, Berkolaborasi dengan tim untuk menyelesaikan
          lebih dari 5 project website dengan keterampilan khusus seperti Html,
          Css, Javascript, ReactJs dan Tailwind. Memiliki aspirasi yang tinggi
          dibidang IT.
        </p>
      </div>

      <div className="">
        <div>
          <h1 className="text-[15px] font-semibold mb-5  tracking-wides">
            Data Pribadi
          </h1>
        </div>
        <div className="">
          <a href="" className="mr-5 text-xs flex mb-3">
            <img src={Email} alt="" className="w-[20px] mr-3" />
            mamujib29@gmail.com
          </a>
          <a href="" className="mr-5 text-xs flex mb-3">
            <img src={Phone} alt="" className="w-[20px] mr-3" />
            0822-9040-1713
          </a>
          <a href="" className="mr-5 text-xs flex">
            <img src={Placeholder} alt="" className="w-[20px] mr-3" />
            Bogor, Jawa Barat
          </a>
        </div>
      </div>

      <div className="">
        <div>
          <h1 className="text-[15px] font-semibold mb-5  tracking-wides">
            Sosial Media
          </h1>
        </div>
        <div className="flex">
          <a href="" className="mr-8 text-xs flex flex-col items-center">
            <img src={Email} alt="" className="w-[30px] mb-2" />
            Email
          </a>
          <a href="" className="mr-8 text-xs flex flex-col items-center">
            <img src={Instagram} alt="" className="w-[30px] mb-2" />
            Instagram
          </a>
          <a href="" className="mr-8 text-xs flex flex-col items-center">
            <img src={Linkedin} alt="" className="w-[30px] mb-2" />
            Linkedin
          </a>
          <a href="" className="mr-8 text-xs flex flex-col items-center">
            <img src={Phone} alt="" className="w-[30px] mb-2" />
            Whatsapp
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 right-[25%]">
        <img src={Green} alt="" className="w-[300px]" />
      </div>
    </div>
  );
};

export default About;
