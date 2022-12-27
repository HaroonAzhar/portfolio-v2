import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaStackOverflow  } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/haroon-azhar-khan-01601a11a/s" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/HaroonAzhar" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://stackoverflow.com/users/11085329/haroon-azhar-khan" target="_blank" rel="noreferrer" ><FaStackOverflow /></a>
    </div>
  )
}

export default HeaderSocials