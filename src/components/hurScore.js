import React from 'react'
import "./hurJunior.css";
import score1 from "./images/hurPage/score1.svg";
import score2 from "./images/hurPage/score2.svg";
import score3 from "./images/hurPage/score3.svg";


function hurScore() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h3>Projekt</h3>
            <h2>Game day –⁠ home</h2>
        </div>
        <div className="juniorGalleryS">
            <img src={score1} alt="" />
            <img src={score2} alt="" />
            <img src={score3} alt="" />
        </div>
        <div className="juniorTags">
          <ul>
            <li id='juniorPost'>IG&FB post</li>
          </ul>
        </div>
    </div>
  )
}

export default hurScore
