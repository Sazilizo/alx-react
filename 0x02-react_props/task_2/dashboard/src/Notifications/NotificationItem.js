import React from "react";

export default function NotificationItem({type, html=null, value}){
    const content= html
    return (
        <>
            {
                html ? (
                <li data={type} dangerouslySetInnerHTML={{ __html: html()}}></li>
                ) : ( 
                <li data={type}>{ value }</li> )
            }
        </>
    )
}