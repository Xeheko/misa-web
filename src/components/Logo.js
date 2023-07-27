import React from "react";
import "./Logo.css";
import logo from "./images/logo_hlavni.png";


function Logo() {

    return(
        <>
        <div className="Logo">
            <img loading="lazy" loading="lazy" src={logo} alt="logo"></img>
        </div>
        </>

    )
}

export default Logo