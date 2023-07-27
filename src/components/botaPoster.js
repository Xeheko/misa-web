import React from 'react'
import "./hurJunior.css";
import botaPoster1 from "./images/hurPage/botaPoster1.png";
import botaPoster2 from "./images/hurPage/botaPoster2.png";








function BotaPoster() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h3>Jednotlivé stránky – design </h3>
            <h2>Bubble led shoes</h2>
        </div>
        <div className="juniorGalleryS">
                <img loading="lazy" src={botaPoster1} alt="" />
                <img loading="lazy" src={botaPoster2} alt="" />
        </div>
        <div className="juniorTags">
          <ul>
            <li id='juniorStories'>Mockup</li>
            <li id='juniorStories'>Design</li>
            <li id='juniorStories'>Plakát</li>
          </ul>
        </div>
    </div>
  )
}

export default BotaPoster
