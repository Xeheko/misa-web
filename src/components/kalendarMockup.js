import React from 'react'
import "./hurJunior.css";
import kalendarMock1 from "./images/hurPage/kalendarMock1.svg";
import kalendarMock2 from "./images/hurPage/kalendarMock2.svg";




function KalendarMockup() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h3>Mockup</h3>
            <h2>Kalendář Jiří z Poděbrad </h2>
        </div>
        <div className="juniorGalleryS">
                <img  src={kalendarMock1} alt="" />
                <img  src={kalendarMock2} alt="" />
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
