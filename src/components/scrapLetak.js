import React from 'react'
import "./hurJunior.css";
import scrap1 from "./images/hurPage/scrap1.svg";
import scrap2 from "./images/hurPage/scrap2.svg";






function ScrapLetak() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h3>Projekt</h3>
            <h2>Bohemia scrap – Leták</h2>
        </div>
        <div className="juniorGalleryS">
                <img loading="lazy" src={scrap1} alt="" />
                <img loading="lazy" src={scrap2} alt="" />
        </div>
        <div className="juniorTags">
          <ul>
            <li id='juniorStories'>Letter</li>
            <li id='juniorStories'>Mockup</li>
          </ul>
        </div>
    </div>
  )
}

export default ScrapLetak
