import React from 'react'
import "./hurJunior.css";
import calmDeti from "./images/hurPage/CalmDeti.png";



function CalmDeti() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h3>Projekt</h3>
            <h2>Mezinárodní den dětí</h2>
        </div>
        <div className="juniorGalleryS">
                <img loading="lazy" src={calmDeti} alt="" />
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
