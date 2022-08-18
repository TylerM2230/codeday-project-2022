import React from "react";
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
        <div className="col">left</div>
        <div className="col">right</div>
      </div>
      <p className="text-center">Current: v1.0.0</p>
    </div>
  );
};

export default Home;
