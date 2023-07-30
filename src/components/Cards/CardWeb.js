import React from "react";
import "./Card.css";
import web from "./web.svg";
import arrow from "./arrow.svg";


function CardWeb() {

    return(

        <div className="Card">
            <div className="ContentCard">
                <img loading="lazy" src={web} alt="web" id="graf"></img>
                <h3>Web Design</h3>
                <div className="Text">
                    <p >
                        Vytvořím Vám <br />
                        responzivní web! <br />
                        Navrhnu jeho strukturu <br />
                        a vizuální podobu. <br />
                        Nebo jej celý zrealizuji.
                    </p>
                </div>
            </div>
                    <input type="checkbox" id="btnControl1" />
                    <label className="btn" for="btnControl1">
                        <img loading="lazy" src={arrow} id="arrow" className="arrowimg" alt="arrow"/>
                    </label>

                    <div className="border">
                        <div className="btnC">
                            <button id="btn"><a href="#formPage">Kontaktovat </a></button>
                        </div>
                    </div>
        
        </div>
        )
}

export default CardWeb