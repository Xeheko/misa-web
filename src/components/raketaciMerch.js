import React from 'react'
import "./hurJunior.css";
import raketaci1 from "./images/hurPage/raketaci1.svg";
import raketaci2 from "./images/hurPage/raketaci2.svg";


function RaketaciMerch() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h3>Projekt</h3>
            <h2>Triko Rakeťáci</h2>
        </div>
        <div className="juniorGalleryS">
                <img loading="lazy" src={raketaci1} alt="" />
                <img loading="lazy" src={raketaci2} alt="" />
        </div>
        <div className="juniorTags">
          <ul>
            <li id='juniorStories'>Mockup</li>
          </ul>
        </div>
    </div>
  )
}

export default RaketaciMerch
