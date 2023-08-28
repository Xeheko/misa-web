import React from 'react'
import "./hurJunior.css";
import hurMerch1 from "./images/hurPage/hurMerch1.svg";
import hurMerch2 from "./images/hurPage/hurMerch2.svg";


function HurMerch() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h3>Projekt</h3>
            <h2>Mikina Jičín Hurricanes</h2>
        </div>
        <div className="juniorGalleryS">
                <img  src={hurMerch1} alt="" />
                <img  src={hurMerch2} alt="" />
        </div>
        <div className="juniorTags">
          <ul>
            <li id='juniorStories'>Mockup</li>
          </ul>
        </div>
    </div>
  )
}

export default HurMerch
