import React from "react";
import { useState, useEffect, useRef } from "react";
import logo from '../../Assets/mainlogo.png'
import './header.css'
import Link from "./link/Link";
import gsLogo from '../../Assets/gs-btc.png';


const Header = () => {
    return (
        <header>
            <div className="header">
                <div className="header-block-logo">
                    <a className="logo-link" href="#">
                        <img src={logo} className="logo"></img>
                    </a>
                </div>
                <nav className="header-block-nav">
                    <ul className="header-nav">
                        <Link value="About"/>
                        <Link value="How to buy"/>
                        <Link value="Socials"/>
                        <Link value="Tokenomics"/>
                    </ul>
                </nav>
            </div>
            <div className="header-secondBlock">
                <div className="secodnBlock-image">
                    <img alt="image" src={gsLogo} className="gs-image"></img>
                </div>
                <div className="header-socondBlock-description">
                    <div className="header-socondBlock-description-title">
                        The Simpsons have predicted the future so many times. 
                        Let's support the Simpsons and find out what awaits us in 2024.
                    </div>
                    <div className="header-socondBlock-description-info">
                        <button className="decription-info-btn">
                            View markets
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;