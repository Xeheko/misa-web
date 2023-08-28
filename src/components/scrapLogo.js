import React from 'react'
import "./hurJunior.css";
import scrapLogo1 from "./images/hurPage/scrapLogo1.svg";
import scrapLogo2 from "./images/hurPage/scrapLogo2.svg";






function ScrapLogo() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h3>Projekt</h3>
            <h2>Bohemia scrap – Logo</h2>
        </div>
        <div className="juniorGalleryS">
                <img  src={scrapLogo1} alt="" />
                <img  src={scrapLogo2} alt="" />
        </div>
        <div className="juniorTags">
          <ul>
            <li id='juniorStories'>Logo</li>
          </ul>
        </div>
    </div>
  )
}

export default ScrapLogo
