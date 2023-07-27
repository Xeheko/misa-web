import React from 'react'
import "./hurJunior.css";
import hurMerch1 from "./images/hurPage/hurMerch1.png";
import hurMerch2 from "./images/hurPage/hurMerch2.png";


function HurMerch() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h3>Projekt</h3>
            <h2>Mikina Jičín Hurricanes</h2>
        </div>
        <div className="juniorGalleryS">
                <img loading="lazy" src={hurMerch1} alt="" />
                <img loading="lazy" src={hurMerch2} alt="" />
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
