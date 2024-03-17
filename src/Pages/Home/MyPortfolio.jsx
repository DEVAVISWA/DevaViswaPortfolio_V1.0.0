import data from "../../data/index.json";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

function MyPortfolio() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Projects</p>
          <h2 className="section--heading">Recent Projects</h2>
        </div>
        <div>
          <button
            className="btn btn-github"
            onClick={() => window.open("https://github.com/DEVAVISWA")}
          >
            {" "}
            <FaGithub size={30} /> Visit My Github
          </button>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="project image" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>

              <a className="text-sm portfolio--link" href={item.client} target="_blank">
                Github Client
                <GoArrowUpRight
                  size={20}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />                
              </a>
              <a className="text-sm portfolio--link" href={item.server} target="_blank">
                Github Server
                <GoArrowUpRight
                  size={20}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />                
              </a>
              <a className="text-sm portfolio--link" href={item.site} target="_blank">
                View Site
                <GoArrowUpRight
                  size={20}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />                
              </a>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MyPortfolio;
