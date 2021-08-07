import React from "react";
import Navbar from "./Navbar";

function Home() {
  return (
    <div className="odd-page home-page page">
      <div className="home-text">
        <div className="orange-home"></div>
        <div className="main-heading">
          <span>Hello,</span>
          <br />
          <span>I am</span>
          <br />
          Kshitij Kumar
        </div>
        <p>A Front-End Web Developer.</p>
      </div>
      <img src="./me.png" className="my-photo"></img>
    </div>
  );
}

export default Home;
