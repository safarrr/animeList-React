import axios from "axios";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [anime, setAnime] = useState();

  const handleSubmit = (e) => {
    // e.preventDefault();
    setSearchParams({ q: e.target.q.value });
    // const q = searchParams.get("q");
    // axios
    //   .get(`https://kitsu.io/api/edge/anime?filter[text]=${q}`)
    //   .then((res) => {
    //     setAnime({ data: res.data.data });
    //   });
  };
  useEffect(() => {
    const q = searchParams.get("q");
    axios
      .get(`https://kitsu.io/api/edge/anime?filter[text]=${q}`)
      .then((res) => {
        setAnime({ data: res.data.data });
      });
  }, []);
  console.log(anime);
  const conten = [];
  if (!anime) {
    conten.push(<h1>no data</h1>);
  } else {
    for (const i in anime.data) {
      conten.push(
        <div
          key={i}
          role="listitem"
          className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-20 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5 "
        >
          <div className=" overflow-hidden shadow-md bg-white rounded-2xl">
            <div className="absolute -mt-20 w-full flex justify-center">
              <div className="h-32 w-32">
                <img
                  src={anime.data[i].attributes.posterImage.large}
                  alt="img"
                  role="img"
                  className="-mt-10 shadow-md"
                />
              </div>
            </div>
            <div className="px-6 mt-16 mb-12 flex flex-col ">
              <h1 className="font-bold text-3xl text-center mb-1">
                {anime.data[i].attributes.titles.en_jp}
              </h1>
              <p className="text-gray-800 text-sm text-center">
                {anime.data[i].attributes.titles.ja_jp}
              </p>
              <p className="text-center text-gray-600 text-base pt-3 font-normal">
                {anime.data[i].attributes.description.slice(0, 100)}{" "}
                <Link
                  to={"/anime/" + anime.data[i].id}
                  className="text-blue-600 font-bold"
                >
                  ......more
                </Link>
                <div className="mt-10">
                  <Link
                    to={"/anime/" + anime.data[i].id}
                    className="px-11 py-5 m-3 text-white rounded-full bg-blue-600"
                  >
                    info
                  </Link>
                </div>
              </p>
            </div>
          </div>
        </div>
      );
    }
  }
  return (
    <>
      <div className="flex flex-col">
        <form onSubmit={handleSubmit} className="flex justify-center m-10">
          <input
            className="px-12 py-5 shadow-md rounded-l-full  focus:outline-none"
            type="text"
            placeholder="hsiii"
            name="q"
          />
          <button
            type="submit"
            className="px-8 py-5 shadow-md rounded-r-full bg-blue-600 text-white"
          >
            <i className="bi bi-search"></i>
          </button>
        </form>
        <div
          role="list"
          className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around mt-20 mx-5"
        >
          {conten}
        </div>
      </div>
    </>

    // <form onSubmit={handleSubmit}>
    //   <input name="q" className="px-10 py-5" type="text"></input>
    //   <button className="p-10 bg-gray-900" type="submit"></button>
    // </form>
  );
};

export default Search;
