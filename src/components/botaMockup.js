import React from 'react'
import "./hurJunior.css";
import botaMockup1 from "./images/hurPage/botaMockup1.svg";
import botaMockup2 from "./images/hurPage/botaMockup2.svg";






function BotaMockup() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h3>Mockup</h3>
            <h2>Bubble led shoes</h2>
        </div>
        <div className="juniorGalleryS">
                <img  src={botaMockup1} alt="" />
                <img  src={botaMockup2} alt="" />
        </div>
        <div className="juniorTags">
          <ul>
            <li id='juniorStories'>Mockup</li>
          </ul>
        </div>
    </div>
  )
}

export default BotaMockup
