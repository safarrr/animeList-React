import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./components/navBar";

// import HeroImg from "../../../public/Hero.jpg";
function Home(state) {
  console.log(state);
  // window.location.reload(false);
  return (
    <>
      <NavBar />
      <div className=" w-full bg-center bg-cover h-screen hero ">
        <div className="flex justify-center items-center  w-full h-full">
          <div className="bg-white/10 py-10 px-5 rounded-2xl backdrop-blur-sm  flex flex-col mt-20s">
            <h1 className="text-4xl text-center font-bold text-white">
              Get you <span className="text-blue-600 underline">Anime</span>
            </h1>
            <div className="flex flex-col md:flex-row mt-4 text-center mx-10">
              <Link
                to="/anime?tab=list&id=0"
                className="bg-blue-600 m-5 text-white rounded-full py-3 px-10 text-xl"
              >
                LIst
              </Link>
              <Link
                to="/anime?tab=top"
                className="bg-blue-600 m-5 text-white rounded-full py-3 px-10 text-xl"
              >
                Top Anime
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
