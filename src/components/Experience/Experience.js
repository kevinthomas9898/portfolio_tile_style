import React from "react";
import "./Experience.css";
import { AiFillStar } from "react-icons/ai";


function Experience() {
  return (
    <>
      <div className="experience">
        <h2>Experience</h2>
        <div className="line"></div>
        <div className="exp-1">
          <div>
            <a><AiFillStar className="exp-icon"/></a>
          </div>
          <div>
            <h3>ReactJs Intern at Builder.io (6 months)</h3>
            <p className="exp-date">2023</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum blanditiis cum, aut magnam odit, sit quae provident officiis unde nemo ipsam saepe, commodi explicabo! Temporibus nostrum praesentium dolorum eaque expedita.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
