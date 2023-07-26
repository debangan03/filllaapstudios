import React from "react";
import Foot from "./Foot";
import { Link } from "react-router-dom";
const Footer = (props) => {
  return (
    <div>
      <div className="h-96  lg:flex lg:items-center p-4 justify-around bg-gray-900">
        <div className="left ">
          <h4 className="text-blue-500 text-lg"> Let's talk</h4>
          <h1 className="text-white text-4xl lg:text-8xl font-extrabold ">
             <span className="stroke-pink-100 spst"  >{props.ftext1}</span> {props.ftext2} <br /> {props.ftext3}{" "}
          </h1>
          <p className="  text-lg mt-3  font-extralight text-white">
            Get creative solutions. Everyone is a potential creator.
          </p>
        </div>
        <div className="btn ">
          <button className="p-3 border-2 border-transparent  text-sm bg-white mt-2 hover:bg-black hover:text-yellow-50 hover:border-2 hober:border-white "> <Link to={`/${props.l}`} >{props.btn1}</Link> </button>
        </div>
      </div>
     <Foot/>
    </div>
  );
};

export default Footer;
