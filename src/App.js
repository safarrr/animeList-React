// import logo from './logo.svg';
import "./App.css";
import { Routes, Route } from "react-router-dom";
import List from "./pages/anime/list";
import Home from "./pages/home/index";
import Info from "./pages/anime/info";
import Search from "./pages/anime/search";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<List />} />
      <Route path="/anime/:id" element={<Info />} />
      <Route path="/anime/search" element={<Search />} />
      {/* <Route path="id/:id" element={<Id />} /> */}
    </Routes>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

// function About() {
//   return (
//     <>
//       <main>
//         <h2>Who are we?</h2>
//         <p>That feels like an existential question, don't you think?</p>
//       </main>
//       <nav>
//         <Link to="/">Home</Link>
//       </nav>
//     </>
//   );
// }
// function Id() {
//   const { id } = useParams();
//   console.log(id);
//   return (
//     <>
//       <main>
//         <h2>Who are we?</h2>
//         <p>{id}</p>
//       </main>
//       <nav>
//         <Link to="/">Home</Link>
//       </nav>
//     </>
//   );
// }
export default App;
