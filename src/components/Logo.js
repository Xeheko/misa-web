import React from "react";
import "./Logo.css";
import logo from "./images/logo_hlavni.svg";
import text from "./images/logo_hlavni_text.svg";


function Logo() {

    return(
        <>
        <div className="Logo">
            <img  src={logo} alt="logo"></img>
            <img  src={text} alt="logo"></img>
        </div>
        </>

    )
}

export default Logo