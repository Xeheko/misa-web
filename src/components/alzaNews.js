import React from 'react'
import "./hurJunior.css";
import news1 from "./images/hurPage/alza_news1.svg";
import news2 from "./images/hurPage/alza_news2.svg";


function AlzaNews() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h3>Projekt</h3>
            <h2>Alza – newsletter</h2>
        </div>
        <div className="juniorGallery">
                <img loading="lazy" src={news1} alt="" />
                <img loading="lazy" src={news2} alt="" />
        </div>
        <div className="juniorTags">
          <ul>
            <li id='juniorStories'>newsletter</li>
            <li id='juniorPost'>e-mail</li>
          </ul>
        </div>
    </div>
  )
}

export default AlzaNews
