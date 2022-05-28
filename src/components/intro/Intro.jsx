import { React, useEffect, useRef } from "react";
import { init } from "ityped";
import "./Intro.scss";

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
    <div id="intro">
      <div id="left">
        <div>
          <p>Hello,</p>
          <p id="name">I'm Anshuman</p>
          <p>I am a developer who loves</p>
          <span ref={textRef}></span>
          <div id="contacts"></div>
        </div>
      </div>
      <div id="right">
        <img src="images/intro-self.jpg" alt="My Self Portrait" />
      </div>
    </div>
  );
}
