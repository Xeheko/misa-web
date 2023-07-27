import React from "react";
import krea from "../images/Krea.png"


function Krea() {

    return(
        <>
        <div className="mainPerk">
            <div className="perkImg">
                <img loading="lazy" src={krea} alt="Komunikativnost" />
            </div>
            <div className="perkTxt">
                <h2>Kreativita</h2>
                <p>Jsem schopna neustále<br /> přicházet s novými nápady, být<br /> inovativní a neváhám<br />
                 experimentovat. </p>
            </div>
        </div>
        </>

    )
}

export default Krea