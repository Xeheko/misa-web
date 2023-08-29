import React from 'react'
import "./hurJunior.css";
import post from "./images/hurPage/win_post.svg";
import uvodni from "./images/hurPage/win_uvodni.svg";
import plakat from "./images/hurPage/win_letak.svg";
import stories from "./images/hurPage/win_stories.svg";

function winFirst() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h3>Projekt</h3>
            <h2 id='pcText'>Nábor ženy –⁠ tackle, flag</h2>
            <h2 id='mobileText'>Nábor ženy⁠ tackle, flag</h2>
        </div>
        <div className="juniorGallery">
            <div className="juniorGalleryL">
                <img  src={post} alt="" />
                <img  src={uvodni} alt="" />
            </div>
            <div className="juniorGalleryR">
              <img  src={plakat} alt="" />
              <img  src={stories} alt="" />
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
