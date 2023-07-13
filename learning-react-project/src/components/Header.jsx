import React from "react";
import logo from "../assets/sticker.webp";

function Header() {
    return (
        <header>
            <nav className="nav">
                <img src={logo} className="nav--logo" alt="React Logo" />
                <h3 className="nav--logo_text">AboutMe</h3>
                <h4 className="nav--title">Learning React - Project 1</h4>
            </nav>
        </header>
    );
}

export default Header