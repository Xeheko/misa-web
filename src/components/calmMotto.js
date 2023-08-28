import React from 'react'
import "./hurJunior.css";
import motto1 from "./images/hurPage/motto1.svg";
import motto2 from "./images/hurPage/motto2.svg";


function CalmMotto() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h3>Projekt</h3>
            <h2>Motto</h2>
        </div>
        <div className="juniorGalleryS">
                <img  src={motto1} alt="" />
                <img  src={motto2} alt="" />
        </div>
        <div className="juniorTags">
          <ul>
            <li id='juniorStories'>IG&FB stories</li>
            <li id='juniorPost'>IG&FB post</li>
          </ul>
        </div>
    </div>
  )
}

export default CalmMotto
