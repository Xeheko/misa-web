import React from 'react'
import "./hurJunior.css";
import showRoom1 from "./images/hurPage/showRoom1.png";
import showRoom2 from "./images/hurPage/showRoom2.png";






function ShowRoomPoster() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h3>Projekt</h3>
            <h2>I-showroom – plakát</h2>
        </div>
        <div className="juniorGalleryS">
                <img loading="lazy" src={showRoom1} alt="" />
                <img loading="lazy" src={showRoom2} alt="" />
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

export default ShowRoomPoster
