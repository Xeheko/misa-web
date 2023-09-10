import React from 'react'
import "./hurJunior.css";

import post from "./images/hurPage/win_cats_post.svg";
import event from "./images/hurPage/win_cats_event.svg";
import stories from "./images/hurPage/win_cats_stories.svg";


function winFourth() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h3>Projekt</h3>
            <h2>Game day</h2>
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

export default winFourth
