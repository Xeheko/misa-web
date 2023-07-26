import React from 'react'
import "./hurJunior.css";
import post1 from "./images/hurPage/wc_velikonoce_1.svg";
import post2 from "./images/hurPage/wc_velikonoce_2.svg";
import post3 from "./images/hurPage/wc_velikonoce_3.svg";


function WcVelikonoce() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h3>Projekt</h3>
            <h2>Veselé Velikonoce WC servis</h2>
        </div>
        <div className="juniorGallery">
                <img src={post1} alt="" />
                <img src={post2} alt="" />
                <img src={post3} alt="" />
        </div>
        <div className="juniorTags">
          <ul>
            <li id='juniorStories'>post</li>
          </ul>
        </div>
    </div>
  )
}

export default WcVelikonoce
