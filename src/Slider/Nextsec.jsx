import React from "react";

import img1 from "./Images/fillaap-02.jpg";
import img2 from "./Images/fillaap-03.jpg";
import img3 from "./Images/fillaap-04.jpg";
import { Link } from "react-router-dom";
import Try from "./Try";
import Insidenextsec from "./Insidenextsec";
function Nextsec() {

  return (
    <div>
      <section className="text-gray-100 body-font bg-gray-700">
        <div className="headingtext h-[100px]">
          <p className="text-white text-justify text-3xl p-2 font-extrabold lg:text-6xl ">
            We are a 3D Art Outsourcing Studio for Gaming, VFX, Metaverse & NFT
          </p>
        </div>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full  rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-40 w-full object-cover object-center"
                  src={img1}
                  alt="blog"
                />
                <div className="p-6 bg-yellow-50">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-900 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-black mb-3">
                  Realistic Hair & Fur
                  </h1>
                  <p className="leading-relaxed mb-3 text-black">
                  Realistic Hair & Fur At our company, we specialize in creating realistic hair and fur for…
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Link to='/Details/Realistic-Hair-&-Fur' className="text-indigo-500 inline-flex cursor-pointer hover:ml-5 hover:text-gray-800 items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full  rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-40 w-full object-cover object-center"
                  src={img2}
                  alt="blog"
                />
                <div className="p-6 bg-yellow-50">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-900 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-black mb-3">
                  Vehicle & Weapons

                  </h1>
                  <p className="leading-relaxed mb-3 text-black">
                  Vehicles & Weapons We are a team of expert designers and artists who specialize in creating high-quality…
                  </p>
                  <div className="flex items-center flex-wrap">
                  <Link to='/Details/Vehicle-&-Weapons' className="text-indigo-500 inline-flex cursor-pointer hover:ml-5 hover:text-gray-800 items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </Link>

                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full  rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-40 w-full object-cover object-center"
                  src={img3}
                  alt="blog"
                />
                <div className="p-6 bg-yellow-50">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-900 mb-1">
                    Category
                  </h2>
                  <h1 className="title-font text-lg font-medium text-black mb-3">
                    AKM Assault Rifle
                  </h1>
                  <p className="leading-relaxed mb-3 text-black">
                  Presenting a composition depicting behind the scenes of war, showcasing AKM. The goal was to create an ...
                  </p>
                  <div className="flex items-center flex-wrap ">
                  <Link to='/Details/AKM-Assault-Rifle' className="text-indigo-500 inline-flex cursor-pointer hover:ml-5 hover:text-gray-800 items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Insidenextsec/>
      <Try/>
    </div>
  );
}

export default Nextsec;
