import React from 'react'
import "./hurJunior.css";
import post from "./images/hurPage/post.svg";
import uvodni from "./images/hurPage/uvodni.svg";
import plakat from "./images/hurPage/plakat.svg";
import stories from "./images/hurPage/stories.svg";

function hurJunior() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h3>Projekt</h3>
            <h2>Nábor juniorka</h2>
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
            <li id='juniorPoster'>poster</li>
            <li id='juniorStories'>IG&FB stories</li>
          </ul>
        </div>
    </div>
  )
}

export default hurJunior
