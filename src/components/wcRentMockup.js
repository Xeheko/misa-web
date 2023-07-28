import React from 'react'
import "./hurJunior.css";
import wcRent1 from "./images/hurPage/wcRent1.svg";
import wcRent2 from "./images/hurPage/wcRent2.svg";



function WcRentMockup() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h3>Projekt</h3>
            <h2>Web design</h2>
        </div>
        <div className="juniorGalleryS">
                <img loading="lazy" src={wcRent1} alt="" />
                <img loading="lazy" src={wcRent2} alt="" />
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

export default WcRentMockup
