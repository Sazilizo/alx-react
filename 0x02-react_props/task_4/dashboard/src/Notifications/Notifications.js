import React from "react";
import closeIcon from "./close-icon.jpg"
import { getLatestNotification } from "../utils/utils";
import "./Notifications.css";
import NotificationItem from "./NotificationItem";

export function Notifications({displayDrawer=true}){

    function clickChange(){
        console.log("Close button has been clicked")
    }
    return (
        <>
            <div className="notification-area">
                <div className='menuItem'>
                    <p>Your notifications</p>
                </div>
                { displayDrawer && 
                    <div className='Notifications'>
                    <p>Here is the list of notifications</p>
                    <ul>
                        <NotificationItem data-testid="child" type="default" value="New course available" />
                        <NotificationItem type="urgent" value="New resume available" />
                        <NotificationItem type="urgent" html={getLatestNotification}/>
                    </ul>
                    <button aria-label='Close' onClick={clickChange()}>x</button>
                    </div>
                }
            </div>
        </>
    );
}