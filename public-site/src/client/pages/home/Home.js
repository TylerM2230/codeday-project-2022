import React from "react";
import { FaRegCopy } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
const Home = () => {
  return (
    <div className="container">
      <h1 className="text-center" style={{ paddingTop: "15%", color: "white" }}>
        onsed.js
      </h1>
      <h3 className="text-center font-italic">
        a minimalist, unopinionated <br></br> framework for Node.js
      </h3>
      <div className="row">
        <div className="col">
          <CopyToClipboard text={"npm i onsed@1.0.0"}>
            <FaRegCopy />
          </CopyToClipboard>
        </div>
        <div className="col">
          <button>Read Docs</button>
        </div>
      </div>
      <h5 className="text-center">Current: v1.0.0</h5>
    </div>
  );
};

export default Home;
