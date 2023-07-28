import React from 'react'
import "./hurJunior.css";
import plesPoster from "./images/hurPage/plesPoster.svg";






function PlesPoster() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h3>Projekt</h3>
            <h2>Myslivecký ples - plakát</h2>
        </div>
        <div className="juniorGalleryS">
                <img loading="lazy" src={plesPoster} alt="" />
        </div>
        <div className="juniorTags">
          <ul>
            <li id='juniorStories'>Mockup</li>
          </ul>
        </div>
    </div>
  )
}

export default PlesPoster
