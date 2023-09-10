import React from 'react'
import "./hurJunior.css";

import post from "./images/hurPage/win_schedule_post.svg";
import cover from "./images/hurPage/win_schedule_cover.svg";


function WinSchedule() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h3>Projekt</h3>
            <h2>Schedule season 2023</h2>
        </div>
        <div className="juniorGalleryS">
            <img  src={post} alt="" />
            <img  src={cover} alt="" />
        </div>
        <div className="juniorTags">
          <ul>
            <li id='juniorPost'>IG&FB post</li>
            <li id='juniorStories'>IG&FB cover</li>
          </ul>
        </div>
    </div>
  )
}

export default WinSchedule
