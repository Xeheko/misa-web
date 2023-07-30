import React from 'react'
import "./hurJunior.css";
import work1 from "./images/hurPage/work1.svg";
import work2 from "./images/hurPage/work2.svg";


function CalmWork() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h3>Projekt</h3>
            <h2>Workshop</h2>
        </div>
        <div className="juniorGalleryS">
                <img loading="lazy" src={work1} alt="" />
                <img loading="lazy" src={work2} alt="" />
        </div>
        <div className="juniorTags">
          <ul>
            <li id='juniorPost'>IG&FB post</li>
          </ul>
        </div>
    </div>
  )
}

export default CalmWork
