import { init } from "./utils/initGeometryLayer";
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
// import { Canvas } from "react-three-fiber";
// import { WebGLRenderer } from "three";

function App() {
  //const modelRef = useRef();

  useEffect(() => {
    return init();
  }, []);

  const words = [
    "<3",
    "pzazz",
    "React",
    "legendary grit",
    "three.js",
    "internet stuff",
    "a keyboard",
  ];
  let index = 0;

  function updateFooter() {
    document.querySelector("footer").innerHTML =
      "James, 2022 | Baked with " + words[index];
    index = (index + 1) % words.length;
  }

  setInterval(updateFooter, 3000);

  return (
    <div className="App">
      <div className="hero">
        <h1 className="title">I'm Tchoweyostyr</h1>
        <p className="text">
          I build software that positively impacts how we work, live and play.
        </p>
        <div className="icons">
          <a href="https://twitter.com/jgannon_" className="symbol">
            <FontAwesomeIcon className="fa-2x" icon={faTwitter} />
          </a>
          <a
            href="https://www.linkedin.com/in/jamesngannon/"
            className="symbol"
          >
            <FontAwesomeIcon className="fa-2x" icon={faLinkedin} />
          </a>
          <a href="https://github.com/james-gannon" className="symbol">
            <FontAwesomeIcon className="fa-2x" icon={faGithub} />
          </a>
          <a href="https://github.com/james-gannon" className="symbol">
            <FontAwesomeIcon className="fa-2x" icon="fa-solid fa-file-user" />
          </a>
        </div>
      </div>
      <div className="projects">
        <div className="projects-table">
          <a href="https://jgannon.space" className="anchor">
            <div className="projects-card-1">
              <p className="title">Artwork</p>
              <p className="info">Handcrafted art, cards and NFTs</p>
            </div>
          </a>
          <a
            href="https://www.notion.so/james-gannon/Internet-Field-Guide-dc3224fd47724f8e843857c8baab8766"
            className="anchor"
          >
            <div className="projects-card-2">
              <p className="title">Web3 Field Guide</p>
              <p className="info">Internet research</p>
            </div>
          </a>
          <a
            href="https://github.com/james-gannon/book-shelf-vrf"
            className="anchor"
          >
            <div className="projects-card-3">
              <p className="title">BookShelf dApp</p>
              <p className="info">Chainlink VRF-enabled Ethereum dApp</p>
            </div>
          </a>
          <a
            href="https://messari.io/report/hashing-it-out-with-hedera-hashgraph?referrer=all-research"
            className="anchor"
          >
            <div className="projects-card-4">
              <p className="title">Messari Research</p>
              <p className="info">Hedera Hashgraph</p>
            </div>
          </a>
          <a
            href="https://www.notion.so/james-gannon/Hi-I-m-James-0e5910deed03493d9124406b0f40b7ac"
            className="anchor"
          >
            <div className="projects-card-5">
              <p className="title">Other Projects</p>
              <p className="info">What I'm currently up to</p>
            </div>
          </a>
        </div>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
