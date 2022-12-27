import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-end Development</h3>
          <div className="experience__content">
          <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>HTML,CSS</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Vanilla JS + JQuery</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>React</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Redux(Redux-toolkit, RTQ)</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Next.js</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Tailwind,MUI</h4>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Back-end Development</h3>
          <div className="experience__content">
           <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Node.js, Nest.js</h4>
           </article>
           <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Ruby,Ruby on Rails</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Python, Django</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>PostgreSQL, MySQL, MondoDB</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>AWS,Herouku,Digital Occean,GCP</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Rest API, GraphQL, GRPC</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience