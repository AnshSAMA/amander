import "./Topbar.scss";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Topbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const closeMenu = () => {
    setAnchorEl(null);
  };

  return (
    <div id="topbar">
      <div id="wrapper">
        <div id="left">
          <a href="#intro" className="logo">
            amander.
          </a>
        </div>

        <div id="right">
          <div id="hamburger-menu">
            <Button onClick={openMenu}>{anchorEl === null ? <MenuIcon className="menu-icon" /> : <CloseIcon className="menu-icon" />}</Button>
            <Menu anchorEl={anchorEl} open={open} onClose={closeMenu}>
              <MenuItem onClick={closeMenu}>
                <a className="right-navs" href="#skills">
                  skills
                </a>
              </MenuItem>
              <MenuItem onClick={closeMenu}>
                <a className="right-navs" href="#works">
                  works
                </a>
              </MenuItem>
              <MenuItem onClick={closeMenu}>
                <a className="right-navs" href="./assets/Resume - Anshuman Mander.pdf" download>
                  resume
                </a>
              </MenuItem>
            </Menu>
          </div>
          <>
            <a href="#skills">skills</a>
            <a href="#works">works</a>
            <a href="./assets/Resume - Anshuman Mander.pdf" download>
              resume
            </a>
          </>
        </div>
      </div>
    </div>
  );
}
