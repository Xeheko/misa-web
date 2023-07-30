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