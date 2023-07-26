import React from "react";
import { Link } from "react-router-dom";
const projects = [
  {
    title: "Druid-Game-Ready",
    desc: "Druid - Game Ready introduction We are glad to share the game-ready character 'Druid' with you all. Planning the character before moving to the software is a crucial step. The…",
    date: "14 Aptil",
    img: "/fillaap-01/fillaap-studios-01.jpg",
  },
  {
    title: "Barbarion-Warrior",
    desc: "Druid - Game Ready introduction We are glad to share the game-ready character 'Druid' with you all. Planning the character before moving to the software is a crucial step. The…",
    date: "14 Aptil",
    img: "/fillaap-01/fillaap-studios-01 (1).jpg",
  },
  {
    img: "/fillaap-01/fillaap-02.jpg",
    title: "Detective-Pikachu",
    desc: "Druid - Game Ready introduction We are glad to share the game-ready character 'Druid' with you all. Planning the character before moving to the software is a crucial step. The…",
    date: "14 Aptil",
  },
  {
    img: "/fillaap-01/fillaap-studios-0-2b.jpg",
    title: "Mk-13-Mod-7-Sniper-Rifle",
    desc: "Druid - Game Ready introduction We are glad to share the game-ready character 'Druid' with you all. Planning the character before moving to the software is a crucial step. The…",
    date: "14 Aptil",
  },
  {
    img: "/fillaap-01/fillaap-studios-gaming-nft-metaverse-group-14.jpg",
    title: "The-Good-Dinosaur",
    desc: "Druid - Game Ready introduction We are glad to share the game-ready character 'Druid' with you all. Planning the character before moving to the software is a crucial step. The…",
    date: "14 Aptil",
  },
  {
    img: "/fillaap-01/fillaap-studios-01-scene-1-level-png.jpg",
    title: "Godzilla",
    desc: "Druid - Game Ready introduction We are glad to share the game-ready character 'Druid' with you all. Planning the character before moving to the software is a crucial step. The…",
    date: "14 Aptil",
  },
  {
    img: "/fillaap-01/fillaap-studios-0-2b.jpg",
    title: "Artillery-L118-Gun",
    desc: "Druid - Game Ready introduction We are glad to share the game-ready character 'Druid' with you all. Planning the character before moving to the software is a crucial step. The…",
    date: "14 Aptil",
  },
  {
    img: "/fillaap-01/nelson.jpg",
    title: "Prince-Roogers-Nelson",
    desc: "Druid - Game Ready introduction We are glad to share the game-ready character 'Druid' with you all. Planning the character before moving to the software is a crucial step. The…",
    date: "14 Aptil",
  },
];

function Project() {
  return (
    <>
      <div className=" h-[60vh] static top-0 max-w-screen flex items-center justify-around shadow-md shadow-slate-200 bg-slate-950">
        <div className="text-4xl text-white font-bold">PROJECTS</div>
      </div>
      <div
        className="mx-auto  max-w-screen overflow-y-hidden bg-cover bg-fixed bg-top bg-no-repeat shadow-lg"
        style={{
          backgroundImage: `url('/fillaap-01/abstract.avif')`,
        }}
      >
        {projects.map((item, i) => {
          return (
            <Link to={`/Details/${item.title}`} key={i}>
              <div className="flex flex-row justify-around py-10">
                <div className="max-w-[70vw] rounded overflow-hidden shadow-md shadow-slate-500">
                  <img
                    className="w-full max-h-[80vh] object-cover  object-top  p-4 "
                    src={item.img}
                    alt="Sunset in the mountains"
                  />
                  <div className="px-6 py-4 flex justify-around items-center space-x-2 text-white">
                    <div>
                      <div className="font-bold text-xl mb-2">
                        {item.title.replace(/-/g, " ")}
                      </div>
                      <div>
                      <p className=" text-base text-justify text-white">
                        {item.desc}
                      </p>
                      </div>
                    </div>
                    <div className="btn bg-transparent hover:bg-slate-900 text-white font-bold py-6 px-4 border-b-4 border-slate-700 hover:border-blue-500 rounded">
                      <button className="text-white">{item.date}</button>
                    </div>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block hover:bg-slate-950 bg-slate-900 hover:shadow-lg hover:shadow-slate-700 rounded-md p-2 text-sm font-semibold text-gray-200 mr-2 mb-2">
                      Discover More &rarr;
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Project;
