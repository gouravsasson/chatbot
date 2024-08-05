import React from "react";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <>
    <div>
      <div className=" flex items-center justify-between  py-5 bg-transparent">
        
        <img className=" w-52" src={logo} alt="Logo" />
        <div className=" flex gap-10 mr-20">
          <button className=" text-[#FFFFFF] font-Lexend Light font-bold ">Home</button>
          <button className=" text-[#FFFFFF] font-Lexend font-bold">ChatBot</button>
          <button className=" text-[#FFFFFF] font-Lexend font-bold">Services</button>
          <button className=" text-[#FFFFFF] font-Lexend font-bold">Contact Us</button>
        </div>
        <button className=" font-Lexend bg-white px-5 py-2 rounded-3xl font-bold text-[#000000]">Reach Us</button>
        
      </div>
      
      </div>
      
    </> 
  );
}

export default Navbar;
