import React from 'react'
import "./hurJunior.css";

import post from "./images/hurPage/win_post3.svg";
import event from "./images/hurPage/win_event3.svg";
import stories from "./images/hurPage/win_stories3.svg";


function winThird() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h3>Projekt</h3>
            <h2>Flag Schedule seasson 2023</h2>
        </div>
        <div className="juniorGalleryS">
            <img  src={post} alt="" />
            <img  src={event} alt="" />
            <img  src={stories} alt="" />
        </div>
        <div className="juniorTags">
          <ul>
            <li id='juniorPost'>IG&FB post</li>
            <li id='juniorStories'>IG&FB stories</li>
            <li id='juniorPost'>IG&FB post</li>
          </ul>
        </div>
    </div>
  )
}

export default winThird
