import React from 'react'
import "./hurJunior.css";
import final from "./images/hurPage/final_score_zlin.png";
import post from "./images/hurPage/game_day_zlin.png";
import stories from "./images/hurPage/game_day_zlin_stories.png";


function hurZlin() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h3>Projekt</h3>
            <h2>Game day –⁠ away</h2>
        </div>
        <div className="juniorGallery">
            <img loading="lazy" src={post} alt="" />
            <img loading="lazy" src={stories} alt="" />
            <img loading="lazy" src={final} alt="" />
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

export default hurZlin
