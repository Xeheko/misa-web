import React from 'react'
import "./hurJunior.css";
import cola1 from "./images/hurPage/cola1.png";
import cola2 from "./images/hurPage/cola2.png";






function ColaPoster() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h3>Projekt</h3>
            <h2>Coca-cola - reklamní banner</h2>
        </div>
        <div className="juniorGalleryS">
                <img loading="lazy" src={cola1} alt="" />
                <img loading="lazy" src={cola2} alt="" />
        </div>
        <div className="juniorTags">
          <ul>
            <li id='juniorStories'>Mockup</li>
            <li id='juniorStories'>Design</li>
          </ul>
        </div>
    </div>
  )
}

export default ColaPoster
