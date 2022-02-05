import { useSearchParams } from "react-router-dom";
import List from "./list";
import Info from "./info";
import Top from "./top";
import NavBar from "./components/navBar";
// import Search from "./search";
function AnimeIndex() {
  const [qury, setQury] = useSearchParams();

  console.log(qury.get("tab"));
  const tab = qury.get("tab");
  const id = qury.get("id");
  if (tab === "list") {
    return (
      <>
        <NavBar />
        <div className="mt-28 text-center text-3xl font-bold uppercase dark:bg-gray-700 dark:text-white">
          <h1>{tab}</h1>
        </div>
        <List id={id} />
      </>
    );
  } else if (tab === "search") {
    const q = qury.get("q");
    // if (q) {
    // return <Search />;
    // } else {
    //   return <h1>no q parameter</h1>;
    // }
  } else if (tab === "info") {
    return (
      <>
        <NavBar />
        <div className="mt-28 text-center text-3xl font-bold uppercase dark:bg-gray-700 dark:text-white">
          <h1>{tab}</h1>
        </div>
        <Info id={id} />;
      </>
    );
  } else if (tab === "top") {
    return (
      <>
        <NavBar />
        <div className=" mt-28 text-center text-3xl font-bold uppercase dark:bg-gray-700 dark:text-white">
          <h1>{tab} Anime</h1>
        </div>
        <Top />
      </>
    );
  }

  return <h1>hali</h1>;
}

export default AnimeIndex;
