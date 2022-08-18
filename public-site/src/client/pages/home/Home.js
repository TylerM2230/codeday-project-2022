import React from "react";
import { FaRegCopy } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaAlignJustify } from "react-icons/fa";
import './Home.css'

const Home = () => {
  return (
    <div className="container">
      <h1 className="text-center">  
      <p>onsed.js</p></h1>
      {/* logo */}
      <h2 style={{color:"white"}}><i>a minimal, unopinionated <br/>web framework</i></h2>
      <br/>
        <div class="row">
          <div class="col-sm-code" >
          <pre><code><CopyToClipboard text={"npm i onsed@1.0.0"}>
            <FaRegCopy />
          </CopyToClipboard> $ npm i onsed@1.0.0</code></pre>
          </div>
          <div class="col-sm-docs"><a href='./Docs'> <FaAlignJustify/> Read Docs</a>
          </div>
        </div>
        <br/>
      <p><u>Current: v1.0.0</u></p>

    </div>
  );
};

export default Home;
