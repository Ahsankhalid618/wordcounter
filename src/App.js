import "./App.css";
// import About from "./MyComponents/About";
import Header from "./MyComponents/Header.js";
import Main from "./MyComponents/Main";
import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light");
  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      {/* <Router> */}
        <Header
          title="WordCounters"
          home="Home"
          mode={Mode}
          toggleMode={toggleMode}
        />
        {/* <Routes> */}
          {/* <Route */}
            {/* exact path="/" */}
            {/* element={<Main heading="Enter the text to analyze" mode={Mode} />} */}
            <Main heading="Enter the text to analyze" mode={Mode} />
          {/* ></Route> */}
          {/* <Route exact path="/About" element={<About />}></Route> */}

        {/* </Routes> */}
      {/* </Router> */}
    </>
  );
}

export default App;
