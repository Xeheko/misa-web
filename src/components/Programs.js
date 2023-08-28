import React from "react";
import "./Programs.css";
import AI from "./images/AI.svg";
import PS from "./images/PS.svg";
import Id from "./images/Id.svg";
import Xd from "./images/Xd.svg";
import Pr from "./images/Pr.svg";
import Vinci from "./images/Vinci.svg";
import Figma from "./images/Figma.svg";




function Programs() {

    return(
        <>
            <div className="content">
                <img  src={AI}  alt="AI"/>
                <img  src={PS}  alt="PS"/>
                <img  src={Id}  alt="Id"/>
                <img  src={Xd}  alt="Xd"/>
                <img  src={Pr}  alt="Pr"/>
                <img  src={Vinci} alt="Vinci"/>
                <img  src={Figma} alt="Figma"/>
            </div>
        </>

    )
}

export default Programs