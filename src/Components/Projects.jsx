import React from "react";
import Footer from "../Footer/Footer";
import img2 from "../Slider/Images/fillaap-02.png";
import Try from "../Slider/Try";
const Projects = (props) => {
  return (
    <div>
      <div className="imgtext h-screen w-screen -z-10">
        <img src={img2} alt="" className="h-full w-full object-fill" />
        <div className="text-white  absolute top-1/2 lg:top-72 left-10 right-8">
          <div className="r lg:flex items-center justify-around">
            <div className="left  text-3xl  lg:text-5xl font-extrabold  mb-3 ">Our Work</div>
            <div className="left text-xl lg:text-2xl font-bold text-justify ">
              We believe that every project needs to <br /> have a personal
              touch that delivers a <br />solid impact on the industry for a
              great <br /> cause.
            </div>
          </div>
        </div>
      </div>
    <Try/>
      <Footer ftext1={props.ftext1} ftext2={props.ftext2} btn1={props.btn1} l={props.l}/>
    </div>
  );
};

export default Projects;
