import React from 'react';
import IMG1 from '../../assets/briefly.png';
import IMG2 from '../../assets/p-p1.png';
import IMG3 from '../../assets/notebook-app.png';
import IMG4 from '../../assets/Skipify-landing.png';
import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Briefly',
      img: IMG1,
      description:
        'Complete platform for press-release creation and distribution',
      technologies: 'React | Redux | Strapi(Node.js CMS) | Firebase | Digital Ocean | Typescript',
      link: 'https://briefly.app/',
      github: 'https://gitfront.io/r/user-9843328/E1FfbZTVg3e5/briefly-frontend/',
    },
    {
      id: 2,
      title: 'Skipify',
      img: IMG4,
      description:
        'Multiple tools created for Skipify, a finacial payment AI comapny',
      technologies: 'React+Redux | Next.js | Node.js | Django | Graphql | AWS+GCP | Docker | Microservices|',
      link: 'https://www.skipify.com/us',
      github: 'https://github.com/HaroonAzhar',
    },
    {
      id: 3,
      title: 'Mern-Ecommerce',
      img: IMG2,
      description: 'Fullstack ecommerce appp with admin dashboard',
      technologies: 'Mongo | React | Node.js(express) | Webpack | thrid party API(Mailgn,mailchimp,stripe) | AWS',
      link: 'https://mern-store.onrender.com',
      github: 'https://github.com/HaroonAzhar/e-commerce-plus-dashboard',
    },
    {
      id: 4,
      title: 'Notebook',
      img: IMG3,
      description:
        'Fully responsive note taking app',
      technologies: 'JavaScript | ChakraUI | React',
      link: 'https://main--scintillating-granita-03124a.netlify.app/#/',
      github: 'https://github.com/HaroonAzhar/note-app',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
