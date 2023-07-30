import React from 'react'
import "./hurJunior.css";
import uvodni from "./images/hurPage/schedule_uvodni.svg";
import post from "./images/hurPage/schedule_post.svg";
import stories from "./images/hurPage/schedule_stories.svg";


function hurSchedule() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h3>Projekt</h3>
            <h2>Schedule seasson 2023</h2>
        </div>
        <div className="juniorGalleryS">
            <img loading="lazy" src={post} alt="" />
            <img loading="lazy" src={uvodni} alt="" />
            <img loading="lazy" src={stories} alt="" />
        </div>
        <div className="juniorTags">
          <ul>
            <li id='juniorPost'>IG&FB post</li>
            <li id='juniorPost'>FB cover</li>
            <li id='juniorStories'>IG&FB stories</li>
          </ul>
        </div>
    </div>
  )
}

export default hurSchedule
