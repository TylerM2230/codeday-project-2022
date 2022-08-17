import React from "react";
import './Home.css';
import { FaAlignJustify } from "react-icons/fa"

const Home = () => {
  return (
    <div className="container">
      <h1 className="text-center">  
      <p>onsed.js</p></h1>
      {/* logo */}
      <h2 style={{color:"white"}}><i>a minimal, unopinionated <br/>web framework</i></h2>
      <br/>
      <div className="code-snippet" >
      <pre><code>$ npm i onsed@1.0.0</code></pre>
      </div>

      <div className="go-to-docs"><a href='./Docs'><FaAlignJustify /> Read Docs</a></div>

      <p><u>Current: v1.0.0</u></p>
      
    </div>
  );
};

export default Home;






