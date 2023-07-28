import React from 'react'
import "./hurJunior.css";
import menu1 from "./images/hurPage/menu1.svg";
import menu2 from "./images/hurPage/menu2.svg";




function MenuDesign() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h3>Design</h3>
            <h2>Table tent</h2>
        </div>
        <div className="juniorGalleryS">
                <img loading="lazy" src={menu1} alt="" />
                <img loading="lazy" src={menu2} alt="" />
        </div>
        <div className="juniorTags">
          <ul>
            <li id='juniorStories'>Mockup</li>
          </ul>
        </div>
    </div>
  )
}

export default MenuDesign
