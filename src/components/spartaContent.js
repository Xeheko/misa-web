import React from 'react'
import "./hurJunior.css";
import final from "./images/hurPage/katerina.png";
import post from "./images/hurPage/fotbal.png";
import stories from "./images/hurPage/agata.png";


function myAgeContent() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h3>Projekt</h3>
            <h2>AC Sparta Praha – karty hráček</h2>
        </div>
        <div className="juniorGallery">
            <img loading="lazy" src={post} alt="" />
            <img loading="lazy" src={stories} alt="" />
            <img loading="lazy" src={final} alt="" />
        </div>
        <div className="juniorTags">
          <ul>
            <li id='juniorPost'>IG&FB post</li>
          </ul>
        </div>
    </div>
  )
}

export default myAgeContent
