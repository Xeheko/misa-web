import React from 'react'
import "./hurJunior.css";
import post from "./images/hurPage/post.png";
import uvodni from "./images/hurPage/uvodni.png";
import plakat from "./images/hurPage/plakat.png";
import stories from "./images/hurPage/stories.png";

function hurJunior() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h3>Projekt</h3>
            <h2>Nábor juniorka</h2>
        </div>
        <div className="juniorGallery">
            <div className="juniorGalleryL">
                <img loading="lazy" src={post} alt="" />
                <img loading="lazy" src={uvodni} alt="" />
            </div>
            <div className="juniorGalleryR">
              <img loading="lazy" src={plakat} alt="" />
              <img loading="lazy" src={stories} alt="" />
            </div>
        </div>
        <div className="juniorTags">
          <ul>
            <li id='juniorPost'>IG&FB post</li>
            <li id='juniorCover'>FB cover</li>
            <li id='juniorPoster'>poster</li>
            <li id='juniorStories'>IG&FB stories</li>
          </ul>
        </div>
    </div>
  )
}

export default hurJunior
