import React from "react";
import "./Menu.scss";
import CloseIcon from "@mui/icons-material/Close";

export default function Menu({ topbarActive, setTopbarActive }) {
    return (
        <div className="menu">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" onClick={() => setTopbarActive(false)}>
                        Intro
                    </a>
                    <a href="#portfolio" onClick={() => setTopbarActive(false)}>
                        Portfolio
                    </a>
                    <a href="#contact" onClick={() => setTopbarActive(false)}>
                        Contact
                    </a>
                </div>
                <div className="right" onClick={() => setTopbarActive(false)}>
                    <CloseIcon />
                </div>
            </div>
        </div>
    );
}
