import React from 'react'
import "./hurJunior.css";
import wedryDesign1 from "./images/hurPage/wedryDesign1.svg";
import wedryDesign2 from "./images/hurPage/wedryDesign2.svg";



function WedryDesign() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h2>Potisk trika</h2>
        </div>
        <div className="juniorGalleryS">
                <img loading="lazy" src={wedryDesign1} alt="" />
                <img loading="lazy" src={wedryDesign2} alt="" />
        </div>
        <div className="juniorTags">
          <ul>
            <li id='juniorStories'>Design</li>
          </ul>
        </div>
    </div>
  )
}

export default WedryDesign
