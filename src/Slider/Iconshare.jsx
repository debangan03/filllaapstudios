import React from 'react'
import { useRef } from "react";
import { FaShareAlt } from "react-icons/fa";
import { FaArtstation } from "react-icons/fa";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import {  AiOutlineInstagram } from "react-icons/ai";

function Icon() {
  const ref = useRef();
  const toglebtn = () => {
    if (ref.current.classList.contains("hidden")) {
      ref.current.classList.remove("hidden");
      ref.current.classList.add("flex");
    } else if (ref.current.classList.contains("flex")) {
      ref.current.classList.remove("flex");
      ref.current.classList.add("hidden");
    }};


  return (
    <div><FaShareAlt
    onClick={toglebtn}
    className="text-indigo-700 hover:text-white absolute bottom-12 text-lg left-8 cursor-pointer"
  />
  <div
    ref={ref}
    className="text-indigo-600 text-lg  absolute bottom-12 left-14 hidden"
  >
    <div  className='ml-2 hover:text-white shadow-lg'>
      {" "}
      <a href="/">
        <FaArtstation />
      </a>
    </div>
    <div className='ml-2 hover:text-white  shadow-lg'>
      <a href="/">
        <AiOutlineInstagram />
      </a>
    </div>
    <div className='ml-2 hover:text-white shadow-lg '>
      <a href="/">
        <FiFacebook />
      </a>
    </div>
    <div className='ml-2 hover:text-white shadow-lg'>
      <a href="/">
        <FiLinkedin />
      </a>{" "}
    </div>
  </div></div>
  )
}

export default Icon