import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Covid19Statistics",
    github: "https://github.com/saurabhppawar04/Covid19Statistics",
    demo: "https://drive.google.com/file/d/1khN22_aNLluo3pSdv2-X-gpxIL5XBCx8/view",
  },
  {
    id: 2,
    image: IMG2,
    title: "Plant Selling Website",
    github: "https://github.com/saurabh-pawar07/test-site",
    demo: "https://saurabh-pawar07.github.io/test-site/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div
        className="container 
      portfolio__container"
      >
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
