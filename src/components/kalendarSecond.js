import React from 'react'
import "./hurJunior.css";
import kalendarium5 from "./images/hurPage/kalendarium5.svg";
import kalendarium6 from "./images/hurPage/kalendarium6.svg";
import kalendarium7 from "./images/hurPage/kalendarium7.svg";





function KalendarSecond() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h3>Jednotlivé stránky – druhá část </h3>
            <h2>Kalendář Jiří z Poděbrad </h2>
        </div>
        <div className="juniorGalleryS">
                <img src={kalendarium5} alt="" />
                <img src={kalendarium6} alt="" />
                <img src={kalendarium7} alt="" />
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
