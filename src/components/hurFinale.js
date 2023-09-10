import React from 'react'
import "./hurJunior.css";

import plakat from "./images/hurPage/finale_plakat.png";
import post from "./images/hurPage/finale_post.png";
import stories from "./images/hurPage/finale_stories.png";

function hurFinale() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h3>Projekt</h3>
            <h2>Finále 3.liga 2023</h2>
        </div>
        <div className="juniorGallery">
            <div className="juniorGalleryS">
                <img  src={plakat} alt="" />
                <img  src={post} alt="" />
                <img  src={stories} alt="" />
            </div>
        </div>
        <div className="juniorTags">
          <ul>
            <li id='juniorPoster'>poster</li>
            <li id='juniorPost'>IG&FB post</li>
            <li id='juniorStories'>IG&FB stories</li>
          </ul>
        </div>
    </div>
  )
}

export default hurFinale
