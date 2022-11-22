import React from "react";
import "./footer.css";
import { FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Thanks for visiting.
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="http://www.instagram.com/s.a.u.r.a.b.h.p.a.w.a.r/" target="blank">
          <FaInstagram />
        </a>
        <a href="https://www.twitter.com/SAURABH07042000" target="blank">
          <FaTwitter />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
