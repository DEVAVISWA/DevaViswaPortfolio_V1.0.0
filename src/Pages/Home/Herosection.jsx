import React from "react";

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
          <p className="hero--section-description">
            Result driven Full Stack Developer | Proficient in MERN Stack
            <br />
            Ready to make an impact and thrive in a dynamic work environment
          </p>
        </div>
        <button className="btn btn-primary">Get in Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/heroImage.jpg" alt="Hero Section Image" />
      </div>
    </section>
  );
}

export default Herosection;
