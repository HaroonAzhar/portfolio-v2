import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import {  FaStackOverflow } from 'react-icons/fa'
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Haroon Azhar</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/haroon-azhar-khan-01601a11a/s" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/HaroonAzhar" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://stackoverflow.com/users/11085329/haroon-azhar-khan" target="_blank" rel="noreferrer" ><FaStackOverflow /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; HAK 2022. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer