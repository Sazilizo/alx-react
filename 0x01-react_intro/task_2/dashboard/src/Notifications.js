import React from "react";
import "./Notifications.css";
import buttonIcon from "./close-icon.png"
import { getLatestNotification } from "./utils";

export function Notifications(){
    function getStyle(priority){
        return priority === 'urgent' ? { color: 'red' } : { color: 'blue' };
    };
    
    function handleClick(){
        console.log("Close button has been clicked");
    }
    return (
        <div className="Notifications">
            <button aria-label="Close" style={{float:"right"}} onClick={handleClick}>
                <img src={buttonIcon} alt="" width="20px"></img>
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li  data-priority="default" style={getStyle('default')}>New course available</li>
                <li  data-priority="urgent" style={getStyle('urgent')}>New resume available</li>
                <li  style={getStyle('urgent')}dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>

            </ul>
        </div>
    )
}