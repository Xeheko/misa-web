import React from 'react'
import "./hurJunior.css";
import vys from "./images/hurPage/alzaV.png";
import post from "./images/hurPage/alza_post.png";


function AlzaRek() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h3>Projekt</h3>
            <h2>Alza – reklama</h2>
        </div>
        <div className="juniorGalleryL">
            <div className="alzaU">
                <img loading="lazy" src={vys} alt="" />
                <img loading="lazy" src={post} alt="" />
            </div>
        </div>
        <div className="juniorTags">
          <ul>
            <li id='juniorStories'>web banners</li>
            <li id='juniorPost'>post</li>
          </ul>
        </div>
    </div>
  )
}

export default AlzaRek
