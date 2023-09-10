import React from 'react'
import "./hurJunior.css";
import mvp from "./images/hurPage/MVP.svg";
import divaci from "./images/hurPage/divaci.svg";
import final from "./images/hurPage/final_score.svg";
import svoboda from "./images/hurPage/svoboda.svg";

function hurLast() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h3>Projekt</h3>
            <h2>Finále a semifinále FB/IG post</h2>
        </div>
        <div className="juniorGallery">
            <div className="juniorGalleryL">
                <img  src={mvp} alt="" />
                <img  src={final} alt="" />
            </div>
            <div className="juniorGalleryL">
                <img  src={divaci} alt="" />
                <img  src={svoboda} alt="" />
            </div>
        </div>
    </div>
  )
}

export default hurLast
