import React from 'react'
import "./hurJunior.css";
import likvidace1 from "./images/hurPage/likvidace1.svg";
import likvidace2 from "./images/hurPage/likvidace2.svg";



function LikvidaceDesign() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h3>Projekt</h3>
            <h2>Web design</h2>
        </div>
        <div className="juniorGalleryS">
                <img src={likvidace1} alt="" />
                <img src={likvidace2} alt="" />
        </div>
        <div className="juniorTags">
          <ul>
            <li id='juniorPost'>Web</li>
            <li id='juniorPost'>Mockup</li>
          </ul>
        </div>
    </div>
  )
}

export default LikvidaceDesign
