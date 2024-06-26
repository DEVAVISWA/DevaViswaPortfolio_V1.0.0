import React from "react";
import data from "../../data/index.json";

function Testimonials() {
  return (
    <section className="testimonial--section" id="testimonial">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Experience and Education</p>
          <h2 className="sections--heading">Experience</h2>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.experience?.map((item, index) => (
          <div key={index} className="testimonial--section--card">
            <a className="testimonial--section--card--review" href={item.offerLetter} target="_blank">
              {item.title}
            </a>
            <div className="testimonial--section--card--author--detail">
              <div>
                <p className="text-md testimonial--author--name">
                  {item.company_name}
                </p>
                <p className="text-md testimonial--author--designation">
                  {item.date}
                </p>
              </div>
            </div>
            <p className="text-md">{item.description}</p>
          </div>
        ))}
      </div>
      <h2 className="sections--heading">Certification and Education</h2>
      <div className="portfolio--section--container">
        {data?.education?.map((item, index) => (
          <div key={index} className="testimonial--section--card">
            <a className="testimonial--section--card--review" href={item.certificate} target="_blank">
              {item.title}
            </a>
            <div className="testimonial--section--card--author--detail">
              <div>
                <p className="text-md testimonial--author--name">
                  {item.institute_name}
                </p>
                <p className="text-md testimonial--author--designation">
                  {item.date}
                </p>
              </div>
            </div>
            <p className="text-md">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
