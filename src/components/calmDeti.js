import React from 'react'
import "./hurJunior.css";
import calmDeti from "./images/hurPage/CalmDeti.svg";



function CalmDeti() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h3>Projekt</h3>
            <h2>Mezinárodní den dětí</h2>
        </div>
        <div className="juniorGalleryS">
                <img src={calmDeti} alt="" />
        </div>
        <div className="juniorTags">
          <ul>
            <li id='juniorPost'>IG&FB post</li>
          </ul>
        </div>
    </div>
  )
}

export default CalmDeti
