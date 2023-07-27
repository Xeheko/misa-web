import React from 'react'
import "./hurJunior.css";
import kalendarium5 from "./images/hurPage/kalendarium5.png";
import kalendarium6 from "./images/hurPage/kalendarium6.png";
import kalendarium7 from "./images/hurPage/kalendarium7.png";





function KalendarSecond() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h3>Jednotlivé stránky – druhá část </h3>
            <h2>Kalendář Jiří z Poděbrad </h2>
        </div>
        <div className="juniorGalleryS">
                <img loading="lazy" src={kalendarium5} alt="" />
                <img loading="lazy" src={kalendarium6} alt="" />
                <img loading="lazy" src={kalendarium7} alt="" />
        </div>
        <div className="juniorTags">
          <ul>
            <li id='juniorStories'>Kalendář</li>
            <li id='juniorStories'>Digitalizace</li>
          </ul>
        </div>
    </div>
  )
}

export default KalendarSecond
