import React from 'react'
import "./hurJunior.css";
import space1 from "./images/hurPage/space1.svg";
import space2 from "./images/hurPage/space2.svg";
import space3 from "./images/hurPage/space3.svg";
import space4 from "./images/hurPage/space4.svg";
import space5 from "./images/hurPage/space5.svg";
import space6 from "./images/hurPage/space6.svg";
import space7 from "./images/hurPage/space7.svg";
import space8 from "./images/hurPage/space8.svg";




function SpaceContent() {
  return (
    <div className='juniorAll'>
        <div className="tentHeader">
            <h3>Projekt</h3>
            <h2>Space Mission</h2>
        </div>
        <div className="menuGallery">
                <img  src={space1} alt="" />
                <img  src={space2} alt="" />
                <img  src={space3} alt="" />
                <img  src={space4} alt="" />
                <img  src={space5} alt="" />
                <img  src={space6} alt="" />
                <img  src={space7} alt="" />
                <img  src={space8} alt="" />
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
