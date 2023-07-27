import React from 'react'
import "./hurJunior.css";
import post from "./images/hurPage/win_post.png";
import uvodni from "./images/hurPage/win_uvodni.png";
import plakat from "./images/hurPage/win_letak.png";
import stories from "./images/hurPage/win_stories.png";

function winFirst() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h3>Projekt</h3>
            <h2>Nábor ženy –⁠ tackle, flag</h2>
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
            <li id='juniorPoster'>letters</li>
            <li id='juniorStories'>IG&FB stories</li>
          </ul>
        </div>
    </div>
  )
}

export default winFirst
