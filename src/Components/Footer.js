import React from 'react';

import './../css/ComponentsStyles/customFooter.css';
import githubLogo from './../css/img/github-logo.png';

export const Footer = () => {
  return (
    <footer>
      <h4>Created by Alan Pieczonka, 2017</h4>
      <a href="https://github.com/AlanPieczonka/ReactMarkdownPreviewer" target="_blank" rel="noopener noreferrer">
        <img src={githubLogo} className="img--githublogo" alt="Github Icon" />
      </a>
    </footer>
  );
};