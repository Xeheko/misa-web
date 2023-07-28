import React from 'react'
import "./hurJunior.css";
import kalendarium from "./images/hurPage/kalendarium.svg";
import kalendarium2 from "./images/hurPage/kalendarium2.svg";
import kalendarium3 from "./images/hurPage/kalendarium3.svg";
import kalendarium4 from "./images/hurPage/kalendarium4.svg";





function KalendarFirst() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h3>Jednotlivé stránky – první část </h3>
            <h2>Kalendář Jiří z Poděbrad </h2>
        </div>
        <div className="juniorGalleryS">
                <img loading="lazy" src={kalendarium} alt="" />
                <img loading="lazy" src={kalendarium2} alt="" />
                <img loading="lazy" src={kalendarium3} alt="" />
                <img loading="lazy" src={kalendarium4} alt="" />
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

export default KalendarFirst
