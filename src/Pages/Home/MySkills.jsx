import data from "../../data/index.json";
import React from "react";


function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">My Skills</p>
        <h2 className="skills--section--heading">My Expertise</h2>
      </div>      
      <p className="mt-4 text-xl text-justify text-black">
        Using a combination of cutting-edge technologies and reliable
        open-source software I build user-focused, performant apps and websites
        for smartphones, tablets, and desktops.
      </p>
      <div className="flex flex-wrap mt-8 justify-between ">
        {data?.skills?.map((item, index) => (
          <div
            key={index}
            // initial="hidden"
            // whileinview={"visible"}
            // variants={{
            //   visible: {
            //     y: 0,
            //     opacity: 1,
            //     transition: {
            //       type: "spring",
            //     },
            //   },
            //   hidden: { opacity: 1, y: 80 },
            // }}
            className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
          >
            <img alt="img" src={item.link} className="w-12" />
            <h4 className="text-md ml-4">{item.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MySkills;
