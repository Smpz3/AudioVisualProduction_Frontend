import { useRef } from "react";
import React from 'react';
import { FaTimes, FaBars } from "react-icons/fa";
import "../styles/main.css";
//import imageSrc from "../images/Richards_Copy.png";
function NavBar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header>
            <h3> The Brightside Productions, LLC </h3>
            <nav ref={navRef}>
                <a href="/pages/shows">Shows</a>
                <a href="/pages/characters">Characters</a>
                <a href="/pages/store">Store</a>
                <a href="/pages/admin/register">Register</a>
                <a href="/pages/admin/login">Login</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}


export default NavBar;
