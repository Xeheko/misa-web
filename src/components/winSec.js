import React from 'react'
import "./hurJunior.css";
import post from "./images/hurPage/win_post2.svg";
import uvodni from "./images/hurPage/win_uvodni2.svg";
import kino from "./images/hurPage/win_kino2.svg";
import stories from "./images/hurPage/win_stories2.svg";

function winSec() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h3>Projekt</h3>
            <h2>Nábor ženy –⁠ tackle, flag</h2>
        </div>
        <div className="juniorGallery">
            <div className="juniorGalleryL">
                <img src={uvodni} alt="" />
                <img src={kino} alt="" />
            </div>
            <div className="juniorGalleryR">
              <img src={stories} alt="" />
              <img src={post} alt="" />
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
