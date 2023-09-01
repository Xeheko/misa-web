import React from "react";
import "./Logo.css";
import logo from "./images/logo.svg";


function Logo() {

    return(
        <>
        <div className="Logo">
            <img  src={logo} alt="logo"></img>
        </div>
        </>

    )
}

export default Logo