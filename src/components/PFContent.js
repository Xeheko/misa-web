import React from 'react'
import "./hurJunior.css";
import PF1 from "./images/hurPage/PF1.svg";
import PF2 from "./images/hurPage/PF2.svg";








function PFContent() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h3>Projekt</h3>
            <h2>PF 2021</h2>
        </div>
        <div className="juniorGalleryS">
                <img  src={PF1} alt="" />
                <img  src={PF2} alt="" />
        </div>
        <div className="juniorTags">
          <ul>
            <li id='juniorStories'>Mockup</li>
          </ul>
        </div>
    </div>
  )
}

export default PFContent
