import React from "react";
import spol from "../images/Spol.png"


function Spol() {

    return(
        <>
        <div className="mainPerk">
            <div className="perkImg">
                <img loading="lazy" src={spol} alt="Komunikativnost" />
            </div>
            <div className="perkTxt">
                <h2>Spolehlivost</h2>
                <p>Dodržuji stanovené termíny<br /> 
                   a vždy dokončuji projekty včas<br />
                   s kvalitou, kterou Vám <br />jsem slíbila.</p>
            </div>
        </div>
        </>

    )
}

export default Spol