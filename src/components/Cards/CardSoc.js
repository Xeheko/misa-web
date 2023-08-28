import React from "react";
import "./Card.css";
import soc from "./soc.svg";
import arrow from "./arrow.svg";


function CardSoc() {

    return(

        <div className="Card">
            <div className="ContentCard">
                <img  src={soc} alt="web" id="graf"></img>
                <h3>Sociální sítě</h3>
                <div className="Text">
                    <p >
                    Postarám se o Váš obsah
                    na sociálních sítích!
                    Postarám se o to aby vše fungovalo, 
                    jak nejlépe to půjde.
                    </p>
                </div>
            </div>
                    <input type="checkbox" id="btnControl2" />
                    <label className="btn" for="btnControl2">
                        <img  src={arrow} id="arrow" className="arrowimg" alt="arrow"/>
                    </label>

                    <div className="border">
                        <div className="btnC">
                            <button id="btn"><a href="#formPage">Kontaktovat </a></button>
                        </div>
                    </div>
        
        </div>
        )
}

export default CardSoc