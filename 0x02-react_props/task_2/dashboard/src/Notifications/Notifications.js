import React from "react";
import closeIcon from "./close-icon.jpg"
import { getLatestNotification } from "../utils/utils";
import "./Notifications.css";
import NotificationItem from "./NotificationItem";

export function Notifications(){

    function clickChange(){
        console.log("Close button has been clicked")
    }
    return (
        <div className="Notifications">
            <p>Here is the list of notifications</p>
            <ul>
                <NotificationItem data-testid="child" type="default" value="New course available" />
                <NotificationItem type="urgent" value="New resume available" />
                <NotificationItem type="urgent" html={getLatestNotification}/>
			</ul>
            <button aria-label="Close" style={{position:"absolute", top:0, right:0, backgroundColor:"transparent"}} onClick={clickChange}><img src={closeIcon} alt="close icon" width="20px"></img></button>

        </div>
    );
}