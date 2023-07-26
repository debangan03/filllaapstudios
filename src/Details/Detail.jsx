import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import img1 from "../Slider/fillaap-01/fillaap-01 (3).jpg";
import img2 from "../Slider/fillaap-01/fillaap-studios-01b.jpg";
import img3 from "../Slider/fillaap-01/fillaap-studios-0-2b.jpg";
import img4 from "../Slider/fillaap-01/fillaap-studios-0-2c.jpg";
import img5 from "../Slider/fillaap-01/fillaap-studios-00abc.jpg";
import img6 from "../Slider/fillaap-01/fillaap-studios-1-4a.jpg";
import img7 from "../Slider/fillaap-01/fillaap-studios-01 (1).jpg";
import img8 from "../Slider/fillaap-01/fillaap-studios-01-scene-1-level-png.jpg";

// import img10 from "../Slider/fillaap-01/fillaap-studios-01 (7).jpg";
import img11 from "../Slider/fillaap-01/fillaap-studios-06 (2).jpg";
// import img13 from "../Slider/fillaap-01/fillaap-studios-09 (1).jpg";
// import img14 from "../Slider/fillaap-01/fillaap-studios-04 (3).jpg";
import img15 from "../Slider/fillaap-01/fillaap-studios-gaming-nft-metaverse-group-15.jpg";
import img16 from "../Slider/fillaap-01/fillaap-studios-88.jpg";
import img17 from "../Slider/fillaap-01/fillaap-studios-99.jpg";
import img18 from "../Slider/fillaap-01/fillaap-05.jpg";

import Footer from "../Footer/Footer";
let info = {
  "Realistic-Hair-&-Fur": {
    img: "/fillaap-01/fillaap-02.jpg",
    text: "At our company, we specialize in creating realistic hair and fur for digital characters and creatures. We use a combination of advanced card and particle systems to produce stunning results that accurately mimic the movement and texture of real hair and fur. Our skilled artists work tirelessly to create custom hair and fur solutions that meet the unique needs of each project. Whether you need a furry creature for a game or a realistic hairstyle for a cinematic experience, we can help you achieve the perfect look. Our commitment to quality, attention to detail, and use of cutting-edge technology ensure that your hair and fur assets are as realistic and immersive as possible.",
    rltimg: [  {img:img1,c:"caption"},{img:img7, c:"caption"}, ],
  },
  "Vehicle-&-Weapons": {
    img: "/fillaap-01/fillaap-studios-car.jpg",
    text: "We are a team of expert designers and artists who specialize in creating high-quality vehicles and weapons for use in game art, cinematic productions, NFTs, and AR/VR experiences. Our years of experience and dedication to excellence ensure that each asset we create is both visually stunning and technically optimized for optimal performance in a wide range of digital applications. Whether you need a futuristic car for a sci-fi game or a historically accurate weapon for a period piece, we have the skills and expertise to bring your vision to life. We work closely with our clients to understand their needs and create customized solutions that exceed their expectations. With our focus on quality, innovation, and customer satisfaction, you can trust us to deliver top-notch assets that will enhance your project and engage your audience.",
    rltimg: [  {img:img17,c:"caption"},{img:img5, c:"caption"},{img:img16, c:"caption"} ],
  },
  "AKM-Assault-Rifle": {
    img: "/fillaap-01/fillaap-studios-0-2c.jpg",
    text: "We are a team of expert designers and artists who specialize in creating high-quality vehicles and weapons for use in game art, cinematic productions, NFTs, and AR/VR experiences. Our years of experience and dedication to excellence ensure that each asset we create is both visually stunning and technically optimized for optimal performance in a wide range of digital applications. Whether you need a futuristic car for a sci-fi game or a historically accurate weapon for a period piece, we have the skills and expertise to bring your vision to life. We work closely with our clients to understand their needs and create customized solutions that exceed their expectations. With our focus on quality, innovation, and customer satisfaction, you can trust us to deliver top-notch assets that will enhance your project and engage your audience.",
    rltimg: [{img:img3,c:"caption"},{img:img6, c:"caption"},{img:img4, c:"caption"}],
  },
  "Druid-Game-Ready": {
    img: "/fillaap-01/fillaap-studios-0-2c.jpg",
    text: "We are a team of expert designers and artists who specialize in creating high-quality vehicles and weapons for use in game art, cinematic productions, NFTs, and AR/VR experiences. Our years of experience and dedication to excellence ensure that each asset we create is both visually stunning and technically optimized for optimal performance in a wide range of digital applications. Whether you need a futuristic car for a sci-fi game or a historically accurate weapon for a period piece, we have the skills and expertise to bring your vision to life. We work closely with our clients to understand their needs and create customized solutions that exceed their expectations. With our focus on quality, innovation, and customer satisfaction, you can trust us to deliver top-notch assets that will enhance your project and engage your audience.",
    rltimg: [
      { img: img2, c: "caption" },
      { img: img2, c: "caption" },
    ],
  },
  
  "Barbarion-Warrior": {
    img: "/fillaap-01/fillaap-studios-0-2c.jpg",
    text: "We are a team of expert designers and artists who specialize in creating high-quality vehicles and weapons for use in game art, cinematic productions, NFTs, and AR/VR experiences. Our years of experience and dedication to excellence ensure that each asset we create is both visually stunning and technically optimized for optimal performance in a wide range of digital applications. Whether you need a futuristic car for a sci-fi game or a historically accurate weapon for a period piece, we have the skills and expertise to bring your vision to life. We work closely with our clients to understand their needs and create customized solutions that exceed their expectations. With our focus on quality, innovation, and customer satisfaction, you can trust us to deliver top-notch assets that will enhance your project and engage your audience.",
    rltimg: [
      { img: img7, c: "caption" },
      { img: img2, c: "caption" },
    ],
  },
  "Detective-Pikachu": {
    img: "/fillaap-01/fillaap-02.jpg",
    text: "We are a team of expert designers and artists who specialize in creating high-quality vehicles and weapons for use in game art, cinematic productions, NFTs, and AR/VR experiences. Our years of experience and dedication to excellence ensure that each asset we create is both visually stunning and technically optimized for optimal performance in a wide range of digital applications. Whether you need a futuristic car for a sci-fi game or a historically accurate weapon for a period piece, we have the skills and expertise to bring your vision to life. We work closely with our clients to understand their needs and create customized solutions that exceed their expectations. With our focus on quality, innovation, and customer satisfaction, you can trust us to deliver top-notch assets that will enhance your project and engage your audience.",
    rltimg: [
      { img: img1, c: "caption" },
      { img: img18, c: "caption" },
    ],
  },
  "Mk-13-Mod-7-Sniper-Rifle": {
    img: "/fillaap-01/fillaap-studios-0-2c.jpg",
    text: "We are a team of expert designers and artists who specialize in creating high-quality vehicles and weapons for use in game art, cinematic productions, NFTs, and AR/VR experiences. Our years of experience and dedication to excellence ensure that each asset we create is both visually stunning and technically optimized for optimal performance in a wide range of digital applications. Whether you need a futuristic car for a sci-fi game or a historically accurate weapon for a period piece, we have the skills and expertise to bring your vision to life. We work closely with our clients to understand their needs and create customized solutions that exceed their expectations. With our focus on quality, innovation, and customer satisfaction, you can trust us to deliver top-notch assets that will enhance your project and engage your audience.",
    rltimg: [
      { img: img3, c: "caption" },
      { img: img4, c: "caption" },
    ],
  },
  "The-Good-Dinosaur": {
    img: "/fillaap-01/fillaap-studios-gaming-nft-metaverse-group-14.jpg",
    text: "We are a team of expert designers and artists who specialize in creating high-quality vehicles and weapons for use in game art, cinematic productions, NFTs, and AR/VR experiences. Our years of experience and dedication to excellence ensure that each asset we create is both visually stunning and technically optimized for optimal performance in a wide range of digital applications. Whether you need a futuristic car for a sci-fi game or a historically accurate weapon for a period piece, we have the skills and expertise to bring your vision to life. We work closely with our clients to understand their needs and create customized solutions that exceed their expectations. With our focus on quality, innovation, and customer satisfaction, you can trust us to deliver top-notch assets that will enhance your project and engage your audience.",
    rltimg: [
      { img: img15, c: "caption" },
      { img: img15, c: "caption" },
    ],
  },
  "caption": {
    img: "/fillaap-01/fillaap-studios-gaming-nft-metaverse-group-14.jpg",
    text: "ongoing page in work",
    rltimg: [
      { img: img15, c: "caption" },
      { img: img15, c: "caption" },
    ],
  },
  "Godzilla":{
    img: "/fillaap-01/fillaap-studios-01-scene-1-level-png.jpg",
    text: "We are a team of expert designers and artists who specialize in creating high-quality vehicles and weapons for use in game art, cinematic productions, NFTs, and AR/VR experiences. Our years of experience and dedication to excellence ensure that each asset we create is both visually stunning and technically optimized for optimal performance in a wide range of digital applications. Whether you need a futuristic car for a sci-fi game or a historically accurate weapon for a period piece, we have the skills and expertise to bring your vision to life. We work closely with our clients to understand their needs and create customized solutions that exceed their expectations. With our focus on quality, innovation, and customer satisfaction, you can trust us to deliver top-notch assets that will enhance your project and engage your audience.",
    rltimg: [
      { img: img8, c: "caption" },
      { img: img15, c: "caption" },
    ],
  },
  "Artillery-L118-Gun":{
    img: "/fillaap-01/fillaap-studios-00abc.jpg",
    text: "We are a team of expert designers and artists who specialize in creating high-quality vehicles and weapons for use in game art, cinematic productions, NFTs, and AR/VR experiences. Our years of experience and dedication to excellence ensure that each asset we create is both visually stunning and technically optimized for optimal performance in a wide range of digital applications. Whether you need a futuristic car for a sci-fi game or a historically accurate weapon for a period piece, we have the skills and expertise to bring your vision to life. We work closely with our clients to understand their needs and create customized solutions that exceed their expectations. With our focus on quality, innovation, and customer satisfaction, you can trust us to deliver top-notch assets that will enhance your project and engage your audience.",
    rltimg: [
      { img: img4, c: "caption" },
      { img: img5, c: "caption" },
    ],
  },
  "Prince-Roogers-Nelson":{
    img: "/fillaap-01/nelson.jpg",
    text: "We are a team of expert designers and artists who specialize in creating high-quality vehicles and weapons for use in game art, cinematic productions, NFTs, and AR/VR experiences. Our years of experience and dedication to excellence ensure that each asset we create is both visually stunning and technically optimized for optimal performance in a wide range of digital applications. Whether you need a futuristic car for a sci-fi game or a historically accurate weapon for a period piece, we have the skills and expertise to bring your vision to life. We work closely with our clients to understand their needs and create customized solutions that exceed their expectations. With our focus on quality, innovation, and customer satisfaction, you can trust us to deliver top-notch assets that will enhance your project and engage your audience.",
    rltimg: [
      { img: img11, c: "caption" },
      { img: img11, c: "caption" },
    ],
  },
  "Game-Ready-Mouse":{
    img: "/fillaap-01/fillaap-01.jpg",
    text: "We are a team of expert designers and artists who specialize in creating high-quality vehicles and weapons for use in game art, cinematic productions, NFTs, and AR/VR experiences. Our years of experience and dedication to excellence ensure that each asset we create is both visually stunning and technically optimized for optimal performance in a wide range of digital applications. Whether you need a futuristic car for a sci-fi game or a historically accurate weapon for a period piece, we have the skills and expertise to bring your vision to life. We work closely with our clients to understand their needs and create customized solutions that exceed their expectations. With our focus on quality, innovation, and customer satisfaction, you can trust us to deliver top-notch assets that will enhance your project and engage your audience.",
    rltimg: [
      { img: img11, c: "caption" },
      { img: img11, c: "caption" },
    ],
  },
};
function Detail(props) {
  const { name } = useParams();


  return (
    <>
      <div>
        <div className="top h-[60vh] max-w-screen flex items-center justify-around hover:bg-slate-950">
          <div className="text-4xl text-white font-bold">
            {name.replace(/-/g, " ")}
          </div>
        </div>
        <div
          className="mx-auto h-[80vh] max-w-screen overflow-y-hidden bg-cover bg-fixed bg-top bg-no-repeat shadow-lg"
          style={{
            backgroundImage: `url(${info[name]["img"]})`,
          }}
        ></div>
        <div className="r lg:flex h-[60vh] items-center  text-white justify-around px-4 py-10 text-center ">
          <div className="left  text-xl  lg:text-3xl font-extrabold  mb-3 ">
            {name.replace(/-/g, " ")}
          </div>
          <div className="left text-sm lg:text-md font-normal w-full lg:w-[60vw] text-justify ">
            {info[name]["text"]}
          </div>
        </div>
        <div>
          <div className="lg:grid lg:grid-cols-4 lg:grid-flow-row-dense lg:gap-2 p-6 lg:p-10 bg-slate-700 flex flex-wrap -m-4">
            {info[name].rltimg.map((item, i) => {
              console.log(item.c);
              return (
                <div
                  key={i}
                  className={`h-full col-span-2 ${
                    i % 2 === 0 ? "" : "row-span-2"
                  }  rounded-lg mb-2 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30`}
                >
                  <div className="">
                    <img
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-1 group-hover:scale-125"
                      src={item.img}
                      alt="img"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" />
                  <div className="absolute inset-0 flex translate-y-[120%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h1 className="font-dmserif text-3xl font-bold text-white">
                      {item.c}
                    </h1>
                    <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"></p>
                    <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                      <Link to={`/Details/${item.c}`}>See More</Link>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer ftext1={props.ftext1} btn1={props.btn1} l={props.l} />
    </>
  );
}

export default Detail;
