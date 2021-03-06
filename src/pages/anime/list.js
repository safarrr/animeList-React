import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const List = (props) => {
  const [anime, setAnime] = useState(null);

  // const [loading, setLoading] = useState(true);
  var conten = [];
  const id = props.id;
  console.log(typeof id);
  const [qury, setQury] = useSearchParams();
  const getData = (id) => {
    if (id === "0") {
      axios.get("https://kitsu.io/api/edge/anime").then((res) => {
        const data = res.data.data;
        // console.log(data);
        setAnime({ data });
      });
    } else {
      axios
        .get(
          `https://kitsu.io/api/edge/anime?page%5Blimit%5D=10&page%5Boffset%5D=${
            id * 10
          }`
        )
        .then((res) => {
          const data = res.data.data;

          setAnime({ data });
        });
    }
  };
  useEffect(() => {
    if (!id) {
      return setQury({ tab: "list", id: "0" });
    }
    getData(0);
  }, []);

  if (anime === null) {
    // console.log("nodata");
  } else {
    // console.log(anime.data);
    for (const i in anime.data) {
      conten.push(
        <div
          key={i}
          role="listitem"
          className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5 mx-3"
        >
          <div className=" overflow-hidden shadow-md bg-white rounded-2xl dark:bg-gray-800 dark:text-white">
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
                    to={"/anime?tab=info&id=" + anime.data[i].id}
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
  // console.log(anime);

  return (
    <>
      <div
        role="list"
        className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around mt-20 mx-5 dark:bg-gray-700"
      >
        {conten}
      </div>
      <div className="flex flex-row justify-center m-3">
        {id > 0 && (
          <Link
            to={`/anime?tab=list&id=${parseInt(id) - 1} `}
            onClick={() => getData()}
            className="mx-5 p-3 hover:border-blue-500 text-blue-600 text-center border-2 border-blue-600 text-3xl"
          >
            <i className="bi bi-arrow-left"></i>
          </Link>
        )}
        <Link
          to={`/anime?tab=list&id=${parseInt(id) + 1}`}
          onClick={() => getData(parseInt(id) + 1)}
          className="mx-5 p-3 text-3xl hover:border-blue-500 text-blue-600 text-center border-2 border-blue-600"
        >
          <i className="bi bi-arrow-right"></i>
        </Link>
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
};

export default List;
// export default Home;
