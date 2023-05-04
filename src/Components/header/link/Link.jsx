import React from "react";
import './link.css'

const Link = (props) => {
    return (
        <li className="nav-item"><a href="#" className="nav-item-link">{props.value}</a></li>
    )
}

export default Link;