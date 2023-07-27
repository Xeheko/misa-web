import React from 'react'
import "./hurJunior.css";
import space1 from "./images/hurPage/space1.png";
import space2 from "./images/hurPage/space2.png";
import space3 from "./images/hurPage/space3.png";
import space4 from "./images/hurPage/space4.png";
import space5 from "./images/hurPage/space5.png";
import space6 from "./images/hurPage/space6.png";
import space7 from "./images/hurPage/space7.png";
import space8 from "./images/hurPage/space8.png";




function SpaceContent() {
  return (
    <div className='juniorAll'>
        <div className="tentHeader">
            <h3>Projekt</h3>
            <h2>Space Mission</h2>
        </div>
        <div className="menuGallery">
                <img loading="lazy" src={space1} alt="" />
                <img loading="lazy" src={space2} alt="" />
                <img loading="lazy" src={space3} alt="" />
                <img loading="lazy" src={space4} alt="" />
                <img loading="lazy" src={space5} alt="" />
                <img loading="lazy" src={space6} alt="" />
                <img loading="lazy" src={space7} alt="" />
                <img loading="lazy" src={space8} alt="" />
        </div>
        <div className="juniorTags">
          <ul>
            <li id='juniorPost'>Pixel art</li>
            <li id='juniorPost'>Videohra</li>
          </ul>
        </div>
    </div>
  )
}

export default SpaceContent
