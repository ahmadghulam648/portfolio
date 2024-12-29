import React from "react";
import Header from "./homecomp/header";
import "../assets/css/index.css";
import Portfolio from "./homecomp/portfolio";
import about from "../assets/image/about.jpg";
import Service from "./homecomp/service";

export default function HomePage() {
  return (
    <>
      <Header />
      <Portfolio />

      <div className="about-us-page">
        <div className="about-section">
          <div className="about-section-left">
            <div className="about-image">
              <img src={about} alt="" />
              <div className="border-about"></div>
            </div>
          </div>
          <div className="about-section-right">
            <h3>About Us</h3>
            <p>My name is Ghulam Ahmad, and I am a web designer and developer specializing in React and Node.js. With a strong focus on both front-end and back-end development.</p>
            <p>I create intuitive, responsive, and dynamic web applications. I am passionate about delivering high-quality user experiences through modern technologies</p>
            <div className="about-me">
              <div className="about-first">
                <span>Name</span>
                <span>Email</span>
                <span>Phone</span>
                <span>Date-of-Birth</span>
                <span>Address</span>
              </div>
              <div className="about-second">
                <span>Ghulam Ahmad</span>
                <span>ahmad.ghulam648@gmail.com</span>
                <span>(+92)317-6138253</span>
                <span>08-09-2002</span>
                <span>St #No 2 Mohallah Khan Pura </span>
              </div>
            </div>

            <div className="button-for-me">
              <button>Hire Me</button>
              <button>Download Cv</button>
            </div>
          </div>
        </div>
      </div>

      <Service/>
    </>
  );
}
