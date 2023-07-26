import React from "react";
import "./Card.css";
import edit from "./edit.svg";
import arrow from "./arrow.svg";


function CardEdit() {

    return(

        <div className="Card">
            <div className="ContentCard">
                <img src={edit} alt="web" id="graf"></img>
                <h3>Edit videí</h3>
                <div className="Text">
                    <p >
                    Upravím Vám video!<br />
                    Udělám kompletní postprodukci.
                    Střih, barevnost, text, animace, hudba...
                    </p>
                </div>
            </div>
                    <input type="checkbox" id="btnControl3" />
                    <label className="btn" for="btnControl3">
                        <img src={arrow} id="arrow" className="arrowimg" alt="arrow"/>
                    </label>

                    <div className="border">
                        <div className="btnC">
                            <button id="btn"><a href="#formPage">Kontaktovat </a></button>
                        </div>
                    </div>
        
        </div>
        )
}

export default CardEdit