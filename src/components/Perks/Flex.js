import React from "react";
import flex from "../images/Flex.png"


function Flex() {

    return(
        <>
        <div className="mainPerk">
            <div className="perkImg">
                <img loading="lazy" src={flex} alt="Komunikativnost" />
            </div>
            <div className="perkTxt">
                <h2>Flexibilita</h2>
                <p>Jsem schopna se přizpůsobit<br />
                    měnícím se potřebám projektů<br />
                    a být otevřená novým<br />
                    technologiím a nástrojům.</p>
            </div>
        </div>
        </>

    )
}

export default Flex