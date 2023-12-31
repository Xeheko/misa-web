import React from 'react'
import "./hurJunior.css";
import cola1 from "./images/hurPage/cola1.svg";
import cola2 from "./images/hurPage/cola2.svg";






function ColaPoster() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h3>Projekt</h3>
            <h2 id='pcText'>Coca-cola - reklamní banner</h2>
            <h2 id='mobileText'>Coca-cola reklamní banner</h2>
        </div>
        <div className="juniorGalleryS">
                <img  src={cola1} alt="" />
                <img  src={cola2} alt="" />
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
