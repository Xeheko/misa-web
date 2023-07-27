import React from 'react'
import "./hurJunior.css";
import house1 from "./images/hurPage/house1.png";
import house2 from "./images/hurPage/house2.png";


function houseMerch() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h3>Projekt</h3>
            <h2>Mikina House</h2>
        </div>
        <div className="juniorGalleryS">
                <img loading="lazy" src={house1} alt="" />
                <img loading="lazy" src={house2} alt="" />
        </div>
        <div className="juniorTags">
          <ul>
            <li id='juniorStories'>Mockup</li>
          </ul>
        </div>
    </div>
  )
}

export default houseMerch
