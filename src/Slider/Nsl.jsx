import React from "react";
import Icon from "./Iconshare";


import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import img1 from "./Images/fillaap-02.jpg";
import img2 from "./Images/fillaap-03.jpg";
import img3 from "./Images/fillaap-04.jpg";
import img4 from "./Images/fillaap-05.jpg";
import img5 from "./Images/fillaap-06.jpg";
import img6 from "./Images/fillaap-01.jpg";

const images = [
  {
    url: img1,
    cap: "Detective Pikachu",
  },
  {
    url: img2,
    cap: "1930 CADILLAC V-16 ROADSTER",
  },
  {
    url: img3,
    cap: "AKM Assault Rifle",
  },
  {
    url: img4,
    cap: "Game Ready Mouse",
  },
  {
    url: img5,
    cap: "The Good Dinosaur",
  },
  {
    url: img6,
    cap: "Barbarian Warrior",
  },
];


const Nsl = () => {
  return (
    <div className="">
      <Zoom scale={0.2}>
        {images.map((each, index) => (
          <div>
            <img
              key={index}
              className="slide-container  h-screen lg:object-cover w-screen lg:max-h-screen -z-10"
              src={each.url}
              alt="img"
            />
            <p className="absolute bottom-52  text-transparent  bg-clip-text bg-gradient-to-r from-yellow-200 to-gray-200 left-28 font-bold text-6xl">
              {each.cap}
            </p>
            <Icon/>
          </div>
        ))}
      </Zoom>
    </div>
  );
};
export default Nsl;
