import React from "react";
import kom from "../images/Kom.svg"


function Kom() {

    return(
        <>
        <div className="mainPerk">
            <div className="perkImg">
                <img loading="lazy" src={kom} alt="Komunikativnost" />
            </div>
            <div className="perkTxt">
                <h2>Komunikativnost</h2>
                <p>Jsem schopna vysvětlit své<br /> myšlenky a nápady a zároveň<br />
                 poslouchat Vaše požadavky<br /> a názory.</p>
            </div>
        </div>
        </>

    )
}

export default Kom