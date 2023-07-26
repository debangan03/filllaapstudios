import React from "react";

import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="flex justify-around w-screen h-[80vh] p-10">
        <h1 className="text-transparent  bg-clip-text bg-gradient-to-r text-center py-20 from-indigo-600 to-gray-200 left-28 font-bold lg:text-6xl text-2xl ">
          404 - PAGE NOT FOUND
        </h1>
      </div>
      <Link to="/" className="flex justify-around items-center py-4">
        <button className="btn text-white bg-indigo-700 p-4 rounded-lg">
          {" "}
          <span className="text-2xl">&larr;</span> Go Back
        </button>
      </Link>
    </>
  );
};

export default Error;
