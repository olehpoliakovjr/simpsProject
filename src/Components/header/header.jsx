import React from "react";
import { useState, useEffect, useRef } from "react";
import logo from '../../Assets/mainlogo.png'
import './header.css'


const Header = () => {
    return (
        <header className="header">
            <div className="header-block-logo">
                <a className="logo-link" href="#">
                    <img src={logo} className="logo"></img>
                </a>
            </div>
            <nav className="header-block-nav">
                <ul className="header-nav">
                    <li className="nav-item"><a href="#" className="nav-item-link">About</a></li>
                    <li className="nav-item"><a href="#" className="nav-item-link">How to buy</a></li>
                    <li className="nav-item"><a href="#" className="nav-item-link">Socials</a></li>
                    <li className="nav-item"><a href="#" className="nav-item-link">Tokenomics</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;