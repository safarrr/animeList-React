import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [dark, setDark] = useState(false);
  const handleClick = () => {
    if (nav) {
      setNav(false);
    } else {
      setNav(true);
    }
  };
  const toggelDrakMode = () => {
    const root = window.document.documentElement;
    if (dark) {
      setDark(false);
      root.classList.remove("dark");
      localStorage.setItem("dark", false);
    } else {
      setDark(true);
      root.classList.add("dark");
      localStorage.setItem("dark", true);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("dark") === true) {
      window.document.documentElement.classList.add("dark");
    }
  }, []);
  return (
    <div className="flex flex-col w-full z-50 px-10 py-5 shadow-md items-center fixed top-0 bg-white dark:bg-gray-800 dark:text-white">
      <div className="flex w-full justify-between items-center ">
        <h1 className="text-3xl font-bold">AnimeList</h1>

        <button
          onClick={handleClick}
          className="flex items-center md:hidden text-2xl"
        >
          <i className="bi bi-list"></i>
        </button>
        <div className=" hidden md:flex flex-row">
          <Link to="/" className="text-base mx-5 hover:text-blue-300">
            Home
          </Link>
          <Link
            to="/anime?tab=list&id=0"
            className="text-base mx-5 hover:text-blue-300"
          >
            List
          </Link>
          <Link
            to="/anime?tab=top"
            className="text-base mx-5 hover:text-blue-300"
          >
            Top
          </Link>
          <button onClick={toggelDrakMode} className="mx-5">
            {dark && <i class="bi bi-brightness-high-fill"></i>}
            {!dark && <i class="bi bi-moon-fill"></i>}
          </button>
          <a
            href="https://kitsu.io"
            className="text-base mx-5 hover:text-blue-300"
          >
            kitsu
          </a>
          <a
            href="https://github.com/safarrr/animeList-React"
            className="text-base mx-5 hover:text-blue-300"
          >
            Github
          </a>
        </div>
      </div>
      {nav && (
        <div className="  w-full  flex flex-col items-center  md:hidden">
          <Link to="/" className="text-base mx-5 mt-5 hover:text-blue-300">
            Home
          </Link>
          <Link
            to="/anime?tab=list&id=0"
            className="text-base mx-5 mt-5 hover:text-blue-300"
          >
            List
          </Link>
          <Link
            to="/anime?tab=top"
            className="text-base mx-5 mt-5 hover:text-blue-300"
          >
            Top
          </Link>
          <button onClick={toggelDrakMode} className="mx-5 mt-5">
            <i class="bi bi-moon-fill"></i>
          </button>
          <a
            href="https://kitsu.io"
            className="text-base mx-5 mt-5 hover:text-blue-300"
          >
            kitsu
          </a>
          <a
            href="https://github.com/safarrr/animeList-React"
            className="text-base mx-5 mt-5 hover:text-blue-300"
          >
            Github
          </a>
        </div>
      )}
    </div>
  );
};

export default NavBar;
