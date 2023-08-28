import React from 'react'
import "./hurJunior.css";
import devetsilChar1 from "./images/hurPage/devetsilChar1.svg";
import devetsilChar2 from "./images/hurPage/devetsilChar2.svg";
import devetsilChar3 from "./images/hurPage/devetsilChar3.svg";
import slime1 from "./images/hurPage/slime1.svg";
import slime2 from "./images/hurPage/slime2.svg";
import slime3 from "./images/hurPage/slime3.svg";
import slime4 from "./images/hurPage/slime4.svg";
import slime5 from "./images/hurPage/slime5.svg";
import slime6 from "./images/hurPage/slime6.svg";
import strom1 from "./images/hurPage/strom1.svg";
import strom2 from "./images/hurPage/strom2.svg";
import strom3 from "./images/hurPage/strom3.svg";
import srdce from "./images/hurPage/srdce.svg";
import cedule from "./images/hurPage/cedule.svg";





function DevetsilChar() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h3>Pixel art</h3>
            <h2>Devětsil</h2>
        </div>
        <div className="charGallery">
          <div className="devetsilChar">
                <p>Skok</p>
                <img  src={devetsilChar1} alt="" />
          </div>
          <div className="devetsilChar">
                <p>Chůze</p>
                <img  src={devetsilChar2} alt="" />
          </div>
          <div className="devetsilChar">
                <p>Smrt</p>
                <img  src={devetsilChar3} alt="" />
          </div>
          

        </div>
        <div className="slimeGallery">
                <img  src={slime1} alt="" />
                <img  src={slime2} alt="" />
                <img  src={slime3} alt="" />
                <img  src={slime4} alt="" />
                <img  src={slime5} alt="" />
                <img  src={slime6} alt="" />
        </div>

        <div className="slimeGallery">
                <img  src={strom1} alt="" />
                <img  src={strom2} alt="" />
                <img  src={strom3} alt="" />
                <div className="juniorGalleryL">
                  <img  src={srdce} alt="" />
                  <img  src={cedule} alt="" />
                </div>

        </div>

        <div className="juniorTags">
          <ul>
            <li id='juniorPost'>Pixel art</li>
          </ul>
        </div>
    </div>
  )
}

export default DevetsilChar
