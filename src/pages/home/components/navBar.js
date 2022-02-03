import { useState } from "react";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    if (nav) {
      setNav(false);
    } else {
      setNav(true);
    }
  };
  return (
    <div className="flex flex-col w-full z-50 px-10 py-5 shadow-md items-center fixed backdrop-blur-lg  bg-white/5">
      <div className="flex w-full justify-between items-center ">
        <h1 className="text-3xl font-bold">logo</h1>

        <button
          onClick={handleClick}
          className="flex items-center md:hidden text-2xl"
        >
          <i className="bi bi-list"></i>
        </button>
        <div className=" hidden md:flex flex-row">
          <a href="#" className="text-base mx-5 hover:text-blue-300">
            liink
          </a>
          <a href="" className="text-base mx-5 hover:text-blue-300">
            liink
          </a>
          <a href="" className="text-base mx-5 hover:text-blue-300">
            liink
          </a>
        </div>
      </div>
      {nav && (
        <div className="  w-full  flex flex-col items-center  md:hidden">
          <a href="" className="text-lg hover:text-blue-300 m-5">
            link
          </a>
          <a href="" className="text-lg hover:text-blue-300 m-5">
            link
          </a>
        </div>
      )}
    </div>
  );
};

export default NavBar;
