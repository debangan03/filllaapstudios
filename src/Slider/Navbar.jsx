import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import {FiFacebook,FiLinkedin} from 'react-icons/fi'
import { FaArtstation } from "react-icons/fa";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiFillCloseCircle, AiOutlineInstagram } from "react-icons/ai";
import img from "./Images/logo2.png";

function Navbar() {
  const togglecart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };

  const ref = useRef();

  return (
    <div className="navbar z-50 flex items-center bg-transparent top-0 justify-between left-2 right-0 fixed  ">
      <div className="left"> <Link to='/'>
        <img src={img} className="w-44 h-16 p-4 cursor-pointer " alt="logo" />
        </Link>
      </div>
      <div className="right">
        <button
          onClick={togglecart}
          className="bg-transparent hover:text-gray-800 text-white font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <HiOutlineMenuAlt4 className="text-2xl" />
          <span className="m-2">Menu</span>
        </button>
      </div>
      <div
        ref={ref}
        className="sidebar lg:w-full w-64 h-screen transform transition-transform translate-x-full px-4 py-10 top-0 right-0 absolute z-40 rounded-md bg-gradient-to-r from-stone-600 to-gray-900"
      >
        <img src={img} className="w-44  h-16 p-4" alt="logo" />
        <span
          onClick={togglecart}
          className="absolute top-2 sm:top-4 sm:right-6 right-2 text-xl cursor-pointer text-white hover:text-red-700 font-semibold"
        >
          <AiFillCloseCircle />
        </span>
        <div className="listitems lg:m-10 m-4 text-white flex ">
          <div className="left w-[80%] ">
            <h2 className="font-bold text-4xl text-gray-300">Links</h2>
            <ul className="lg:p-2">
              <li onClick={togglecart} className="lg:text-3xl text-2xl hover:font-bold cursor-pointer "><Link to='/'>Home</Link></li>
              <li onClick={togglecart} className="lg:text-3xl text-2xl hover:font-bold cursor-pointer"><Link to='/contacts'>Contacts</Link></li>
              <li onClick={togglecart} className="lg:text-3xl text-2xl hover:font-bold cursor-pointer"><Link to='/our-works'>Our-Works</Link></li>
            </ul>
          </div>

          <div className="right ml-4 hidden lg:block">
            <ul>
              <li>
                <p>PHONE :</p> <div className="flex space-x-2"><div className="cursor-pointer"> <a href="tel:+91 7667113272"> +91 7667113272 </a></div> <div>,</div><div className="cursor-pointer"><a href="tel:+91 9664096952"> +91 9664096952 </a> </div></div> <br />
                <br /> <p> ADDRESS : </p>{" "}
                <p>
                  {" "}
                  D57, Golf course Road, Sushant Lok2, Sector 56, Gurugram,
                  Haryana 122011, India
                </p>
                <br />
                <br /> <p> EMAIL :</p> <a href="mailto:contact@fillaap.com"> contact@fillaap.com</a>
                <br />
                <br /> <p> SOCIAL :</p>{" "}
                <p>
                  <div className="flex space-x-2">
                    <div className="hover:text-indigo-600"> <a href="/"><FaArtstation /></a>
                      
                    </div>
                    <div className="hover:text-indigo-600">
                        <a href="/"><AiOutlineInstagram /></a>
                      
                    </div>
                    <div className="hover:text-indigo-600">
                        <a href="/"><FiFacebook/></a>
                    
                    </div>
                    <div className="hover:text-indigo-600">
                       <a href="/"><FiLinkedin/></a> </div>
                  </div>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
