import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";

function Herosection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Deva Viswa G</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          {/* <h1 className="hero--section--title">
            <span className="hero--section-title--color">              
              <Typical
                steps={[
                  "Front End",
                  1000,
                  "Full Stack",
                  1000,
                  "Back End",
                  1000,
                ]}
                loop={Infinity}
              />
            </span>{" "}            
            Developer
          </h1> */}
          <p className="hero--section-description">
            Result driven Full Stack Developer | Proficient in MERN Stack
            <br />
            Ready to make an impact and thrive in a dynamic work environment
          </p>
        </div>
        <div className="hero--button--container">
          <button
            className="btn btn-primary button---fitcotent"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1LdbcLUX5Hgt937FMhO3gucEzHeZ0hucC/view?usp=drive_link"
              )
            }
          >
            <IoIosPaper size={20} className="icon" />
            Resume
          </button>
          <button
            className="btn btn-primary"
            onClick={() => window.open("https://github.com/DEVAVISWA")}
          >
            <FaGithub size={20} className="icon" />
            Github
          </button>
          <button
            className="btn btn-primary"
            onClick={() =>
              window.open("https://www.linkedin.com/in/devaviswa-g-0b049b140/")
            }
          >
            <FaLinkedin size={20} className="icon" />
            LinkedIn
          </button>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/heroImage.jpg" alt="Hero Section Image" />
      </div>
    </section>
  );
}

export default Herosection;
