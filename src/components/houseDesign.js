import React from 'react'
import "./hurJunior.css";
import houseDesign1 from "./images/hurPage/houseDesign1.svg";
import houseDesign2 from "./images/hurPage/houseDesign2.svg";
import houseDesign3 from "./images/hurPage/houseDesign3.svg";



function HouseDesign() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h2>Potisk mikiny</h2>
        </div>
        <div className="juniorGalleryS">
                <img  src={houseDesign1} alt="" />
                <img  src={houseDesign2} alt="" />
                <img  src={houseDesign3} alt="" />
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
