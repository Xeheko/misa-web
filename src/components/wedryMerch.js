import React from 'react'
import "./hurJunior.css";
import wedry1 from "./images/hurPage/wedry1.svg";
import wedry2 from "./images/hurPage/wedry2.svg";


function wedryMerch() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h3>Projekt</h3>
            <h2>Triko Wedry</h2>
        </div>
        <div className="juniorGalleryS">
                <img loading="lazy" src={wedry1} alt="" />
                <img loading="lazy" src={wedry2} alt="" />
        </div>
        <div className="juniorTags">
          <ul>
            <li id='juniorStories'>Mockup</li>
          </ul>
        </div>
    </div>
  )
}

export default wedryMerch
