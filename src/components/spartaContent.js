import React from 'react'
import "./hurJunior.css";
import final from "./images/hurPage/katerina.svg";
import post from "./images/hurPage/fotbal.svg";
import stories from "./images/hurPage/agata.svg";


function myAgeContent() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h3>Projekt</h3>
            <h2 id='pcText'>AC Sparta Praha – karty hráček</h2>
            <h2 id='mobileText'>AC Sparta Praha karty hráček</h2>
        </div>
        <div className="juniorGallery">
            <img  src={post} alt="" />
            <img  src={stories} alt="" />
            <img  src={final} alt="" />
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
