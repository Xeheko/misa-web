import React from 'react'
import "./hurJunior.css";
import devetsilGame1 from "./images/hurPage/devetsilGame1.svg";
import devetsilGame2 from "./images/hurPage/devetsilGame2.svg";
import devetsilGame3 from "./images/hurPage/devetsilGame3.svg";
import devetsilGame4 from "./images/hurPage/devetsilGame4.svg";





function DevetsilContent() {
  return (
    <div className='juniorAll'>
        <div className="tentHeader">
            <h3>Projekt</h3>
            <h2>Devětsil</h2>
        </div>
        <div className="menuGallery">
                <img loading="lazy" src={devetsilGame1} alt="" />
                <img loading="lazy" src={devetsilGame2} alt="" />
                <img loading="lazy" src={devetsilGame3} alt="" />
                <img loading="lazy" src={devetsilGame4} alt="" />

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

export default DevetsilContent
