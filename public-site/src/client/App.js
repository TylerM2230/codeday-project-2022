import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Docs from "./pages/docs/Docs";
import Examples from "./pages/examples/Examples";
import Home from "./pages/Home";

import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/examples" element={<Examples />} />
      </Routes>
    </Router>
  );
};

export default App;
