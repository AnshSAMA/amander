import "./Topbar.scss";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { useState } from "react";

export default function Topbar() {
    const [topbarActive, setTopbarActive] = useState(false);
    return (
        <div className={`topbar ${topbarActive ? "active" : ""}`} id="topbar">
            <div className="wrapper">
                {topbarActive ? (
                    <div className={`left ${topbarActive ? "active" : ""}`}>
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
                ) : (
                    <div className="left">
                        <a href="#intro" className="logo">
                            amander.
                        </a>
                        <PersonIcon />
                        <p>0452-048-667</p>
                        <MailIcon />
                        <p>mander.anshuman@gmail.com</p>
                    </div>
                )}

                <div className="right hamburger" onClick={() => setTopbarActive(!topbarActive)}>
                    {topbarActive ? <CloseIcon /> : <MenuIcon />}
                </div>
            </div>
        </div>
    );
}
