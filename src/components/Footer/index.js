import React from 'react';
import { FooterBase } from './styles';
import githubIcon from '../../assets/img/github.png';
import linkedinIcon from '../../assets/img/linkedin.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/gui13info">
        <img src={githubIcon} alt="GitHub" />
      </a>
      <a href="https://www.linkedin.com/in/guilherme-marques-9693ab18a/">
        <img src={linkedinIcon} alt="LikedIn" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
