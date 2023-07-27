import React from "react";
import "./Programs.css";
import AI from "./images/AI.png";
import PS from "./images/PS.png";
import Id from "./images/Id.png";
import Xd from "./images/Xd.png";
import Pr from "./images/Pr.png";
import Vinci from "./images/Vinci.svg";
import Figma from "./images/Figma.png";




function Programs() {

    return(
        <>
            <div className="content">
                <img loading="lazy" loading="lazy" src={AI}  alt="AI"/>
                <img loading="lazy" loading="lazy" src={PS}  alt="PS"/>
                <img loading="lazy" loading="lazy" src={Id}  alt="Id"/>
                <img loading="lazy" loading="lazy" src={Xd}  alt="Xd"/>
                <img loading="lazy" loading="lazy" src={Pr}  alt="Pr"/>
                <img loading="lazy" loading="lazy" src={Vinci} alt="Vinci"/>
                <img loading="lazy" loading="lazy" src={Figma} alt="Figma"/>
            </div>
        </>

    )
}

export default Programs