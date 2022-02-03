import { useSearchParams } from "react-router-dom";
import List from "./list";
import Info from "./info";
// import Search from "./search";
function AnimeIndex() {
  const [qury, setQury] = useSearchParams();
  console.log(qury.get("tab"));
  const tab = qury.get("tab");
  const id = qury.get("id");
  if (tab === "list") {
    return <List id={id} />;
  } else if (tab === "search") {
    const q = qury.get("q");
    // if (q) {
    // return <Search />;
    // } else {
    //   return <h1>no q parameter</h1>;
    // }
  } else if (tab === "info") {
    return <Info id={id} />;
  }

  return <h1>hali</h1>;
}

export default AnimeIndex;
