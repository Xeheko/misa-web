import React from 'react'
import "./hurJunior.css";
import final from "./images/hurPage/mockup_feed a stories_Stránka_1.svg";
import post from "./images/hurPage/mockup_feed a stories_Stránka_2.svg";
import stories from "./images/hurPage/myage_stories.svg";


function myAgeContent() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h3>Projekt</h3>
            <h2>MyAge – reklama⁠  </h2>
        </div>
        <div className="juniorGallery">
            <img  src={post} alt="" />
            <img  src={stories} alt="" />
            <img  src={final} alt="" />
        </div>
        <div className="juniorTags">
          <ul>
            <li id='juniorPost'>IG&FB post</li>
            <li id='juniorStories'>IG&FB stories</li>
          </ul>
        </div>
    </div>
  )
}

export default myAgeContent
