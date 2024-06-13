import React from "react";
import "./Login.css"


export function Login(){
    return (
        <div className="App-body">
            <p>Login to access the full dashboard</p>
            <label htmlFor='email'>
            email:
            <input htmlFor="email" type="email"></input>
            </label>
            <label htmlFor='password'>
            password:
            <input htmlFor="password" type="password"></input>
            </label>
            <button type="submit">OK</button>
        </div>
    );
}