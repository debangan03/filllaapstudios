import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import img2 from "../Slider/fillaap-01/fillaap-studios-01.jpg";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { FaArtstation } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";

function Contacts(props) {
  return (
    <div className=" bg-slate-800">
      <div className="imgtext h-screen w-screen -z-10">
        <img src={img2} alt="" className="lg:h-full lg:w-full lg:object-cover lg:object-top h-screen w-screen" />
        <div className="text-white  absolute top-1/2 lg:top-72 left-16 right-10">
          <div className="r lg:flex items-center justify-around">
            <div className="left  text-3xl  lg:text-5xl font-extrabold  mb-3 ">
              Contact Us
            </div>
            <div className="left text-xl lg:text-3xl font-bold text-justify ">
              Do you want to work together, or talk <br /> about an idea? Let's
              do this.
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex justify-around h-screen mt-14 lg:pb-8 lh:m-8 m-4">
        <div className="leftform bg-indigo-100 lg:w-[45%] w-full p-8 rounded-lg">
          <h1 className="text-black font-bold text-2xl">Let's Talk</h1>
          <p className="text-sm text-gray-900">
            Fields marked with an <span className="text-red-600">*</span> are
            required
          </p>
          <form action="">
            <div className="form lg:p-2 ">
              <label
                htmlFor="name text-xl font-bold"
                className="text-xl font-bold"
              >
                Your Name <span className="text-red-700 ">*</span>{" "}
              </label>
              <br />
              <input
                className="w-full rounded-md p-4"
                type="text"
                id="name"
                placeholder="enter your full name"
              />
            </div>
            <div className="form lg:p-2">
              <label
                htmlFor="name text-xl font-bold"
                className="text-xl font-bold"
              >
                Your Email <span className="text-red-700 ">*</span>{" "}
              </label>
              <br />
              <input
                className="w-full rounded-md p-4"
                type="text"
                id="eml"
                placeholder="enter your email"
              />
            </div>
            <div className="form lg:p-2">
              <label
                htmlFor="name text-xl font-bold"
                className="text-xl font-bold "
              >
                Your Message{" "}
              </label>
              <span className="text-red-700 ">*</span> <br />
              <textarea
                name=""
                id="pl"
                className="w-full rounded-md p-10 lg:p-10 overflow-auto"
              ></textarea>
            </div>
            <div className="lg:pl-2">
              <button className="p-3 border-2 border-transparent rounded-md  text-sm text-yellow-50 bg-black mt-2 hover:bg-white hover:text-black hover:border-2 hover:border-blue-300 ">
                {" "}
                <Link to="/contacts">SUBMIT</Link>{" "}
              </button>
            </div>
          </form>
        </div>

        <div className="right lg:w-[45%] w-full p-6 rounded-lg ">
          <h1 className="text-white font-bold text-2xl">Let's Talk</h1>
          <div className="p-2">
            <a
              className="text-white  text-lg"
              href="mailto:contact@fillaap.com"
            >
              contact@fillaap.com
            </a>
            <br />
            <a
              className="text-white font-bold text-lg"
              href="tel:+91 9664096952"
            >
              {" "}
              +91 9664096952{" "}
            </a>
            <br />
            <a
              className="text-white font-bold text-lg"
              href="tel:+91 7667113272"
            >
              {" "}
              +91 7667113272{" "}
            </a>
            <br />
            <p className="font-bold text-2xl text-white"> ADDRESS : </p>{" "}
            <p className="text-white text-justify">
              {" "}
              D57, Golf course Road, Sushant Lok2, Sector 56, Gurugram, Haryana
              122011, India
            </p>
            <div className="flex space-x-2 mt-3 ">
              <a href="https://www.artstation.com/fillaap" rel="noreferrer" target="_blank">
                <FaArtstation className="text-4xl text-indigo-600  hover:text-white" />
              </a>
              <a href="https://www.facebook.com/yourfillaap/" target="_blank" rel="noreferrer">
                <BsFacebook className="text-4xl text-indigo-600     hover:text-white" />
              </a>
              <a href="https://in.linkedin.com/company/fillaap" target="_blank" rel="noreferrer">
                <BsLinkedin className="text-4xl text-indigo-600 hover:text-white" />
              </a>
              <a
                href="https://www.instagram.com/fillaap.insta/"
                target="_blank"
                rel="noreferrer"
              >
                <SlSocialInstagram className="text-4xl text-indigo-600 hover:text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="map p-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.901759645946!2d77.09999087382845!3d28.452377692241996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f34ffffffff%3A0xc6c40c236725ef81!2sDLF%20Golf%20and%20Country%20Club!5e0!3m2!1sen!2sin!4v1685542816947!5m2!1sen!2sin"
          className="w-full h-96 rounded-md"
          title="maps"
          style={{border:0}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Footer ftext1={props.ftext1} btn1={props.btn1} l={props.l}/>
    </div>
  );
}

export default Contacts;
