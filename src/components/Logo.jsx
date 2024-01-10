import React from "react";
import "../css/Logo.css"; // CSS dosyası

const Logo = () => {
  return (
    <div className="flex items-center justify-center logo ">
      <div className=" p-1 px-2 rounded  relative">
        <div className="text-xl font-extrabold text-gray-800 mb-2">
          Yusuf Bahadır Kavas
        </div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Logo;
