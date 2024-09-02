import React from "react";
import "./hire.css";
import { MdWavingHand } from "react-icons/md";
import { FaBook } from "react-icons/fa";

function Hire() {
  return (
    <div className="hire">
      <div className="top">
        <p className="tagline">Bring Your Ideas to life using React JS.....</p>
        <a href="#" className="hire-me">
          Hire me <MdWavingHand className="icons" />
        </a>
      </div>
      <div className="bottom">
        <div className="experiences">
          <p>2+</p>
          <p> Experience / Projects </p>
        </div>
        <div className="projects">
          <p>
            <FaBook style={{ fontSize: "3vw" }} />
          </p>
          <p>Education</p>
        </div>
        <div className="clients">
          <p>40+</p>
          <p>Clients</p>
        </div>
      </div>
    </div>
  );
}

export default Hire;
