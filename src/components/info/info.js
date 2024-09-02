import React from "react";
import "./info.css";
import myImage from "../../images/profile1.jpeg";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  BsInstagram,
  BsLinkedin,
  BsDribbble,
  BsTwitter,
  BsGithub,
  BsFacebook,
} from "react-icons/bs";

function Info() {
  return (
    <div className="info">
      <div className="topnav" id="myTopnav">
        <a href="#home" className="active">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <a href="javascript:void(0);" className="icon" onclick="myFunction()">
          <GiHamburgerMenu style={{ fontSize: "1.5vw" }} />
        </a>
      </div>
      <div className="profile-photo">
        <img src={myImage} className="kevin" alt="Kevin Thomas" />
      </div>
      <div className="name">
        <p>Name:</p>
        <p>Kevin Thomas</p>
      </div>
      <div className="social-links">
        <a href="/" className="sLinks textLink">
          Social Links:{" "}
        </a>
        <a href="/">
          <BsLinkedin className="sLinks BsLinkedin" />
        </a>
        <a href="/">
          <BsInstagram className="sLinks BsInstagram" />
        </a>
        <a href="/">
          <BsTwitter className="sLinks BsTwitter" />
        </a>
        <a href="/">
          <BsDribbble className="sLinks BsDribbble" />
        </a>
        <a href="/">
          <BsFacebook className="sLinks BsFacebook" />
        </a>
        <a href="/">
          <BsGithub className="sLinks BsGithub" />
        </a>
      </div>
      <div className="about">
        <p>About</p>
        {/* about myself as a react js developer in a p tag */}
        <p>
          I am a React JS developer with good knowledge of HTML, CSS,
          JavaScript, React JS, and Redux. I am a quick learner and a team
          player. I am looking for a job where I can learn and grow as a
          developer.
        </p>
      </div>
    </div>
  );
}

export default Info;
