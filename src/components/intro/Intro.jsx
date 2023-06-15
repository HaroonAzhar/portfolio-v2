import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/dp1.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>5 years</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Professional Projects</small>
            </article>
          </div>
          <p><h3><strong>Hi! I am Haroon</strong></h3> An Experienced fullstack engineer with love for AI, Numbers, Gaming. A scientist at heart with an imaginative mind.I enjoy writing and traveling, to discover about myself and my wandering mind.</p>
										<p> I am well versed with Javascript/TypeScript based frameworks(React, Node), Ruby on Rails, and Python. Mostly worked on enterprise SaaS e-commerce products. I'm very well versed with the web ecosystem and can help with decisions of architectural design.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro
