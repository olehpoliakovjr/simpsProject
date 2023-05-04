import React from "react";
import './webLink.css'


const WebLink = (props) => {
    return(
        <a href={props.path} target="_blank"><img className="firstBlock-apps-list-item" src={props.image}/></a>
        

    )
}

export default WebLink;