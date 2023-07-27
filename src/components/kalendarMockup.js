import React from 'react'
import "./hurJunior.css";
import kalendarMock1 from "./images/hurPage/kalendarMock1.png";
import kalendarMock2 from "./images/hurPage/kalendarMock2.png";




function KalendarMockup() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h3>Mockup</h3>
            <h2>Kalendář Jiří z Poděbrad </h2>
        </div>
        <div className="juniorGalleryS">
                <img loading="lazy" src={kalendarMock1} alt="" />
                <img loading="lazy" src={kalendarMock2} alt="" />
        </div>
        <div className="juniorTags">
          <ul>
            <li id='juniorStories'>Lynorit</li>
            <li id='juniorStories'>Mockup</li>
          </ul>
        </div>
    </div>
  )
}

export default KalendarMockup
