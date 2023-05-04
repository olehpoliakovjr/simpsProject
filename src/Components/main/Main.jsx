import React from "react";
import WebLink from "./webLink/WebLink";
import coinMcLogo from '../../Assets/cmcLogo.png'
import geckoLogo from '../../Assets/coingeckoLogo.jpeg'
import cakeLogo from '../../Assets/pancakeLogo.png'
import uniLogo from '../../Assets/uniLogo.png'
import './main.css'
import './webLink/weblink.css'

const Main = () => {
    return(
        <main className="main">
            <div className="main-firstBlock">
                <div className="firstBlock-title">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Animi sint eveniet ullam nulla. Sint, 
                     distinctio officia et laboriosam pariatur dolor doloremque earum, 
                     numquam laborum asperiores possimus quos itaque mollitia necessitatibus?
                </div>
                <div className="firstBlock-apps">
                    <ul className="firstBlock-apps-list">
                        <WebLink image={coinMcLogo} path="https://coinmarketcap.com/"/>
                        <WebLink image={uniLogo} path="https://uniswap.org/"/>
                        <WebLink image={cakeLogo} path="https://pancakeswap.finance/"/>
                        <WebLink image={geckoLogo} path="https://www.coingecko.com/"/>
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default Main;