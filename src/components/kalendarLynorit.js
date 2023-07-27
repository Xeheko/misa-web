import React from 'react'
import "./hurJunior.css";
import lynorit1 from "./images/hurPage/lynorit1.png";
import lynorit2 from "./images/hurPage/lynorit2.png";
import lynorit3 from "./images/hurPage/lynorit3.png";
import lynorit4 from "./images/hurPage/lynorit4.png";
import lynorit5 from "./images/hurPage/lynorit5.png";
import lynorit6 from "./images/hurPage/lynorit6.png";






function KalendarLynorit() {
  return (
    <div className='juniorAll'>
        <div className="tentHeader">
            <h3>Grafické listy – lynorit </h3>
            <h2>Kalendář Jiří z Poděbrad </h2>
        </div>
        <div className="menuGallery">
                <img loading="lazy" src={lynorit1} alt="" />
                <img loading="lazy" src={lynorit2} alt="" />
                <img loading="lazy" src={lynorit3} alt="" />
                <img loading="lazy" src={lynorit4} alt="" />
                <img loading="lazy" src={lynorit5} alt="" />
                <img loading="lazy" src={lynorit6} alt="" />
        </div>
        <div className="juniorTags">
          <ul>
            <li id='juniorStories'>Lynorit</li>
            <li id='juniorStories'>Tisk</li>
          </ul>
        </div>
    </div>
  )
}

export default KalendarLynorit
