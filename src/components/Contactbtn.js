import React from "react";
import "./Contactbtn.css";
import Msg from "./images/Msg.svg";
import Line from "./images/Line.svg";


function Contactbtn() {

    return(
        <>
        <a href="#formPage">
        <div className="ContactBtn">
            <p>Domluvit si schůzku</p>
            <img loading="lazy" loading="lazy" src={Line} alt="line" id="line"/>
            <img loading="lazy" loading="lazy" src={Msg} alt="Msg" id="msg" />
        </div>
        </a>
        </>

    )
}

export default Contactbtn