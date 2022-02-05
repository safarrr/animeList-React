import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Top() {
  const [Data, setData] = useState();
  useEffect(() => {
    axios.get("https://kitsu.io/api/edge/trending/anime").then((res) => {
      setData(res.data.data);
    });
  }, []);
  console.log(Data);
  const conten = [];
  for (const i in Data) {
    conten.push(
      <div
        key={i}
        role="listitem"
        className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5 mx-3 "
      >
        <div className=" overflow-hidden shadow-md bg-white rounded-2xl dark:bg-gray-800 dark:text-white ">
          <div className="absolute -mt-20 w-full flex justify-center">
            <div className="h-32 w-32">
              <img
                src={Data[i].attributes.posterImage.large}
                alt="img"
                role="img"
                className="-mt-10 shadow-md"
              />
            </div>
          </div>
          <div className="px-6 mt-16 mb-12 flex flex-col ">
            <h1 className="font-bold text-3xl text-center mb-1">
              {Data[i].attributes.titles.en_jp}
            </h1>
            <p className="text-gray-800 text-sm text-center">
              {Data[i].attributes.titles.ja_jp}
            </p>
            <p className="text-center text-gray-600 text-base pt-3 font-normal">
              {Data[i].attributes.description.slice(0, 100)}{" "}
              <Link
                to={"/anime/" + Data[i].id}
                className="text-blue-600 font-bold"
              >
                ......more
              </Link>
              <div className="mt-10">
                <Link
                  to={"/anime?tab=info&id=" + Data[i].id}
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
  return (
    <>
      <div
        role="list"
        className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around mt-20 mx-5"
      >
        {conten}
      </div>
      <div className="px-10 py-10 shadow-md m-5 rounded-2xl text-center dark:bg-gray-800 dark:text-white">
        <h1>
          Data by{" "}
          <a href="https://kitsu.io/" className="text-blue-600">
            kitsu.io
          </a>
        </h1>
      </div>
    </>
  );
}

export default Top;
