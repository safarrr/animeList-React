import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
const Info = (props) => {
  const [data, setData] = useState();
  const [link, setLink] = useState();
  const navigate = useNavigate();
  const id = props.id;
  useEffect(() => {
    axios
      .get(`https://kitsu.io/api/edge/anime/${id}`)
      .then((res) => {
        const datas = res.data.data;
        setData(datas);
      })
      .catch(() => {
        setData(null);
      });
    axios
      .get(`https://kitsu.io/api/edge/anime/${id}/streaming-links`)
      .then((res) => {
        const datas = res.data;
        setLink(datas);
      })
      .catch((e) => {
        setLink(null);
        navigate("/", { replace: true });
      });
  }, []);
  const linkConten = [];
  if (link === undefined) {
    console.log("lodingg");
  } else {
    for (const i in link.data) {
      linkConten.push(
        <a
          key={i}
          href={link.data[i].attributes.url}
          id={i}
          className="px-11 py-5 m-3 text-white rounded-full bg-blue-600"
        >
          Link 1
        </a>
      );
    }
  }
  if (data === undefined) {
    return (
      <div className="text-center">
        <h1 className="text-2xl">no Data</h1>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col  items-center">
        <div className="px-10 py-10 m-5 bg-white drop-shadow-md rounded-3xl dark:bg-gray-800 dark:text-white ">
          <div className="w-32 h-auto">
            <img
              srcSet=""
              src={data.attributes.posterImage.original}
              alt=""
              className="bg-auto "
            ></img>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="px-10 py-10 shadow-md m-5 rounded-2xl text-center dark:bg-gray-800 dark:text-white">
            <h1 className="text-2xl font-bold">
              {data.attributes.titles.en_jp}
            </h1>
            <h1 className="text-sm font-semibold">
              {data.attributes.titles.ja_jp}
            </h1>
          </div>
          <div className="px-10 py-10 shadow-md m-5 rounded-2xl dark:bg-gray-800 dark:text-white">
            <h1
              id="description"
              className="text-lg uppercase text-left font-bold mt-5"
            >
              description
            </h1>
            <p className="">{data.attributes.description}</p>
            <h1
              id="synopsis"
              className="text-lg uppercase text-left font-bold mt-5"
            >
              synopsis
            </h1>
            <p className="">{data.attributes.synopsis}</p>
            <h1
              id="episodeCount"
              className="text-lg uppercase text-left font-bold mt-5"
            >
              episode Count
            </h1>
            <p>{data.attributes.episodeCount}</p>
            <h1
              id="totalLength"
              className="text-lg uppercase text-left font-bold mt-5"
            >
              episode Length
            </h1>
            <p>{data.attributes.episodeLength}</p>
            <h1
              id="subtype"
              className="text-lg uppercase text-left font-bold mt-5"
            >
              subtype
            </h1>
            <p>{data.attributes.subtype}</p>
            <h1
              id="status"
              className="text-lg uppercase text-left font-bold mt-5"
            >
              status
            </h1>
            <p>{data.attributes.status}</p>
            <h1
              id="nsfw"
              className="text-lg uppercase text-left font-bold mt-5"
            >
              nsfw
            </h1>
            <p>{data.attributes.nsfw ? "yes" : "no"}</p>
          </div>
          <div className="px-10 py-10 shadow-md m-5 rounded-2xl flex flex-col dark:bg-gray-800 dark:text-white">
            <h1
              id="status"
              className="text-lg uppercase text-left font-bold mt-5 mb-10"
            >
              streaming links
            </h1>
            <div className="flex flex-wrap">{linkConten}</div>
            {/* <button className="px-11 py-5 m-3 text-white rounded-full bg-blue-600">
              Link 1
            </button>
            <button className="px-11 py-5 m-3 text-white rounded-full bg-blue-600">
              Link 1
            </button> */}
          </div>
          <div className="px-10 py-10 shadow-md m-5 rounded-2xl text-center dark:bg-gray-800 dark:text-white">
            <h1>
              Data by{" "}
              <a href="https://kitsu.io/" className="text-blue-600">
                kitsu.io
              </a>
            </h1>
          </div>
        </div>
      </div>
    );
  }
};

export default Info;
