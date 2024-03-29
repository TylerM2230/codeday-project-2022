import React from "react";
import { FaRegCopy, FaDollarSign, FaBookOpen } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";

import "./Home.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <h1
        className="text-center mb-3 fw-semibold"
        style={{ paddingTop: "15%", color: "black" }}
      >
        onsed.js
      </h1>
      <p
        className="text-center font-italic text-light lead mb-4"
        style={{ fontStyle: "italic" }}
      >
        a minimalist, unopinionated <br></br>framework for{" "}
        <strong>
          {" "}
          <a href="https://nodejs.org/en/" className="text-light">
            Node.js
          </a>
        </strong>
      </p>
      <div className="d-flex flex-column flex-lg-row align-items-md-stretch justify-content-md-center gap-3 mb-4">
        <div className="d-flex align-items-center justify-content-center bg-white rounded">
          <div className="d-inline-flex gap-1">
            <FaDollarSign size={25} />
            <div className="highlight">
              <pre tabindex="0" className="chroma mb-0">
                <code className="language-sh" data-lang="sh">
                  <span className="line">
                    <span className="cl" style={{ marginRight: ".5rem" }}>
                      npm i onsed
                    </span>
                  </span>
                </code>
              </pre>
            </div>
          </div>
          <div style={{ cursor: "pointer" }}>
            <CopyToClipboard text={"npm i onsed"}>
              <FaRegCopy size={25} />
            </CopyToClipboard>
          </div>
        </div>
        <NavLink
          className="btn btn-dark btn-lg bd-btn-lg btn-bd-primary d-flex align-items-center justify-content-center fw-semibold"
          to="/docs"
          exact
        >
          <div className="d-inline-flex gap-1 align-items-center">
            <FaBookOpen size={25} />
            Read Docs
          </div>
        </NavLink>
      </div>
      <p className="text-center text-muted mb-0 fs-10 p-0">
        <strong>v1.0.0</strong>
      </p>
    </div>
  );
};

export default Home;
