import { React, useEffect, useRef } from "react";
import { init } from "ityped";
import "./Intro.scss";

const Contacts = () => {
  return (
    <div id="contacts">
      <div className="contact-icon">
        <a href="https://github.com/AnshSAMA" target="_blank" rel="noopener noreferrer">
          <img src="images/logos/github-logo.svg" alt="Github Link" />
        </a>
      </div>
      <div className="contact-icon">
        <a href="https://www.linkedin.com/in/anshuman-mander-7b3137193/" target="_blank" rel="noopener noreferrer">
          <img src="images/logos/linkedin-logo.svg" alt="LinkedIn Link" />
        </a>
      </div>
      <div className="contact-icon">
        <a href="mander.anshuman@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src="images/logos/email-logo.svg" alt="Email Link" />
        </a>
      </div>
    </div>
  );
};
export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      init(textRef.current, {
        loop: true,
        showCursor: true,
        backDelay: 1500,
        backSpeed: 60,
        strings: ["Designing...", "Developing...", "Programming...", "& Everything Associated."],
      });
    }, 1000);
  }, []);

  //return
  return (
    <div id="page">
      <div id="intro">
        <div id="left">
          <div>
            <p>Hello,</p>
            <p id="name">I'm Anshuman</p>
            <p>I am a developer who loves</p>
            <span ref={textRef}></span>
            <Contacts />
          </div>
        </div>
        <div id="right">
          <img src="images/intro-self.jpg" alt="My Self Portrait" />
        </div>
      </div>
    </div>
  );
}
