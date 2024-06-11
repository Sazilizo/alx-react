import React from "react";
import closeIcon from "./close-icon.jpg"
import { getLatestNotification } from "../utils/utils";
import "./Notifications.css";

export function Notifications(){

    function clickChange(){
        console.log("Close button has been clicked")
    }
    return (
        <div className="Notifications">
            <p>Here is the list of notifications</p>
            <ul>
				<li data-priority="default">New course available</li>
				<li data-priority="urgent">New resume available</li>
				<li data-priority="urgent" dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
			</ul>
            <button aria-label="Close" style={{position:"absolute", top:0, right:0, backgroundColor:"transparent"}} onClick={clickChange}><img src={closeIcon} alt="close icon" width="20px"></img></button>

        </div>
    );
}