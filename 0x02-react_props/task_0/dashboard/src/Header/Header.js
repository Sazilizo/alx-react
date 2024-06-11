import React from "react";
import "./Header.css"
import logo from "../assets/holberton-logo.jpg"

export function Header(){
    return (
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>School dashboard</p>
        </div>
    )
}