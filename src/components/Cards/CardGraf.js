import React from "react";
import "./Card.css";
import graf from "./Graf.svg";
import arrow from "./arrow.svg";


function CardGraf() {

    return(

        <div className="Card">
            <div className="ContentCard">
                <img  src={graf} alt="grafika" id="graf"></img>
                <h3>Grafika</h3>
                <div className="Text">
                    <p>Vytvořím Vám grafiku,<br />
                        která zaujme! <br />
                        Banner, post, leták, katalog, kalendář,
                        plakát, vizitku, billboard...
                    </p>
                </div>
            </div>
                <input type="checkbox" id="btnControl"/>
                <label className="btn" for="btnControl">
                    <img  src={arrow} id="arrow" className="arrowimg" alt="arrow" />
                </label>

            <div className="border">
                <div className="btnC">
                    <button id="btn"><a href="#formPage">Kontaktovat </a></button>
                </div>
            </div>
        </div>
        )
}

export default CardGraf