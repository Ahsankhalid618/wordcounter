import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Header(props) {
  const Mystyle = {
    backgroundColor: props.mode === "light" ? "#DDDDDD" : "#c32020",
    color: props.mode === "light" ? "black" : "white",
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={Mystyle}>
        <div className="container-fluid">
          <a className="navbar-brand" style={Mystyle} href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  style={Mystyle}
                  aria-current="page"
                  href="#"
                >
                  {props.home}
                </a>
              </li>
              {/* <li className="nav-item"> */}
                {/* <a className="nav-link" style={Mystyle} href="/About"> */}
                  {/* About */}
                {/* </a> */}
              {/* </li> */}
            </ul>
            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                onClick={props.toggleMode}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Toggle Mode
              </label>
            </div>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  home: PropTypes.string.isRequired,
};

Header.defaultProps = {
  title: "Your title here ",
  home: "Your menu name here ",
};
