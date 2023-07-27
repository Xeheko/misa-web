import React from 'react'
import "./hurJunior.css";
import houseDesign1 from "./images/hurPage/houseDesign1.png";
import houseDesign2 from "./images/hurPage/houseDesign2.png";
import houseDesign3 from "./images/hurPage/houseDesign3.png";



function HouseDesign() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h2>Potisk mikiny</h2>
        </div>
        <div className="juniorGalleryS">
                <img loading="lazy" src={houseDesign1} alt="" />
                <img loading="lazy" src={houseDesign2} alt="" />
                <img loading="lazy" src={houseDesign3} alt="" />
        </div>
        <div className="juniorTags">
          <ul>
            <li id='juniorStories'>Design</li>
          </ul>
        </div>
    </div>
  )
}

export default HouseDesign
