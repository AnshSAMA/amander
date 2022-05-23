import "./Topbar.scss";

// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";

// import { useState } from "react";

export default function Topbar() {
  //   const [topbarActive, setTopbarActive] = useState(false);
  return (
    <div className={`topbar`} id="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            amander.
          </a>
        </div>

        <div className="right hamburger">
          <a href="#skills">skills</a>
          <a href="#works">works</a>
          <a href="#resume">resume</a>
        </div>
      </div>
    </div>
  );
}
