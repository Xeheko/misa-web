import React from 'react'
import "./hurJunior.css";
import calm1 from "./images/hurPage/calm1.svg";
import calm2 from "./images/hurPage/calm2.svg";
import calm3 from "./images/hurPage/calm3.svg";
import calm4 from "./images/hurPage/calm4.svg";
import calm5 from "./images/hurPage/calm5.svg";
import calm6 from "./images/hurPage/calm6.svg";
import calm7 from "./images/hurPage/calm7.svg";
import calm8 from "./images/hurPage/calm8.svg";
import calm9 from "./images/hurPage/calm9.svg";
import calm10 from "./images/hurPage/calm10.svg";


function CalmMotto() {
  return (
    <div className='juniorAll'>
        <div className="calmHeader">
            <h3>Projekt</h3>
            <h2>IG/FB post</h2>
        </div>
        <div className="menuGallery">
                <img  src={calm1} alt="" />
                <img  src={calm2} alt="" />
                <img  src={calm3} alt="" />
                <img  src={calm4} alt="" />
                <img  src={calm5} alt="" />
                <img  src={calm6} alt="" />
                <img  src={calm7} alt="" />
                <img  src={calm8} alt="" />
                <img  src={calm9} alt="" />
                <img  src={calm10} alt="" />
        </div>
    </div>
  )
}

export default CalmMotto
