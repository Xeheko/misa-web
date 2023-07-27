import React from 'react'
import "./hurJunior.css";
import post from "./images/hurPage/win_post2.png";
import uvodni from "./images/hurPage/win_uvodni2.png";
import kino from "./images/hurPage/win_kino2.png";
import stories from "./images/hurPage/win_stories2.png";

function winSec() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h3>Projekt</h3>
            <h2>Nábor ženy –⁠ tackle, flag</h2>
        </div>
        <div className="juniorGallery">
            <div className="juniorGalleryL">
                <img loading="lazy" src={uvodni} alt="" />
                <img loading="lazy" src={kino} alt="" />
            </div>
            <div className="juniorGalleryR">
              <img loading="lazy" src={stories} alt="" />
              <img loading="lazy" src={post} alt="" />
            </div>
        </div>
        <div className="juniorTags">
          <ul>
            <li id='juniorCover'>kino reklama</li>
            <li id='juniorPoster'>FB cover</li>
            <li id='juniorStories'>IG&FB stories</li>
            <li id='juniorPost'>IG&FB post</li>
          </ul>
        </div>
    </div>
  )
}

export default winSec
