import React from 'react'
import "./hurJunior.css";
import event from "./images/hurPage/Hradec_event.png";
import post from "./images/hurPage/Hradec_post.png";
import stories from "./images/hurPage/Hradec_stories.png";


function hurTrut() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h3>Projekt</h3>
            <h2>Game day –⁠ home</h2>
        </div>
        <div className="juniorGalleryS">
            <img loading="lazy" src={post} alt="" />
            <img loading="lazy" src={event} alt="" />
            <img loading="lazy" src={stories} alt="" />
        </div>
        <div className="juniorTags">
          <ul>
            <li id='juniorPost'>IG&FB post</li>
            <li id='juniorPost'>FB event</li>
            <li id='juniorStories'>IG&FB stories</li>
          </ul>
        </div>
    </div>
  )
}

export default hurTrut
