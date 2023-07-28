import React from 'react'
import "./hurJunior.css";
import ples1 from "./images/hurPage/ples1.svg";
import ples2 from "./images/hurPage/ples2.svg";






function PlesDesign() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">

            <h2>Design myslivecký ples</h2>
        </div>
        <div className="juniorGalleryS">
                <img loading="lazy" src={ples1} alt="" />
                <img loading="lazy" src={ples2} alt="" />
        </div>
        <div className="juniorTags">
          <ul>
            <li id='juniorStories'>Design</li>
          </ul>
        </div>
    </div>
  )
}

export default PlesDesign
