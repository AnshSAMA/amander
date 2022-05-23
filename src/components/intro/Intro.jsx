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
        strings: ["Design...", "Technology...", "& Everything Associated."],
      });
    }, 1000);
  }, []);

  //return
  return (
    <div className="intro" id="intro">
      <div className="left">
        <img src="images/man.png" alt="wtf" />
      </div>
      <div className="right">
        <div>
          <h1>Hi There, I'm Anshuman</h1>
          <span>A Developer Who Loves </span>
          <br></br>
          <span ref={textRef}></span>
        </div>
        <a href="#portfolio">
          <img src="/images/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
