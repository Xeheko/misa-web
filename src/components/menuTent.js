import React from 'react'
import "./hurJunior.css";
import mockup1 from "./images/hurPage/mockup1.png";
import mockup2 from "./images/hurPage/mockup2.png";
import mockup3 from "./images/hurPage/mockup3.png";
import mockup4 from "./images/hurPage/mockup4.png";



function MenuTent() {
  return (
    <div className='juniorAll'>
        <div className="tentHeader">
            <h3>Projekt</h3>
            <h2>Table tent</h2>
        </div>
        <div className="menuGallery">
                <img loading="lazy" src={mockup1} alt="" />
                <img loading="lazy" src={mockup2} alt="" />
                <img loading="lazy" src={mockup3} alt="" />
                <img loading="lazy" src={mockup4} alt="" />
        </div>
        <div className="juniorTags">
          <ul>
            <li id='juniorStories'>Mockup</li>
          </ul>
        </div>
    </div>
  )
}

export default MenuTent
