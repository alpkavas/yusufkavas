import React from "react";
import person from "../assets/img/yusufba.png";
import background from "../assets/img/aa.jpg";
import "../css/HeaderSection.css";

function HeaderSection() {
  return (
    <div className="px-5 flex flex-col text-left justify-around items-center bg-gray-50 contain  md:flex-row md:flex md:px-20">
      <div className="flex-col md:jus">
        <h1 className="text-black md:text-gl text-xl">Dr. Öğr. Üyesi </h1>
        <h1 className="text-black md:text-lx text-gl ">Yusuf Bahadır Kavas</h1>
        <h2 className="text-black md:text-lg text-lg">
          Amasya Üniversitesi - Büro Yönetimi ve Yönetici Asistanlığı
        </h2>
      </div>
      <div className="relative flex justify-center items-center">
        <img
          src={background}
          className="circle absolute z-10"
          alt="backgroundProfile"
        />
        <img src={person} alt="Yusufba Resmi" className="profile z-20" />
      </div>
    </div>
  );
}

export default HeaderSection;
