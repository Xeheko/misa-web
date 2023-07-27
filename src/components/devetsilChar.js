import React from 'react'
import "./hurJunior.css";
import devetsilChar1 from "./images/hurPage/devetsilChar1.png";
import devetsilChar2 from "./images/hurPage/devetsilChar2.png";
import devetsilChar3 from "./images/hurPage/devetsilChar3.png";
import slime1 from "./images/hurPage/slime1.png";
import slime2 from "./images/hurPage/slime2.png";
import slime3 from "./images/hurPage/slime3.png";
import slime4 from "./images/hurPage/slime4.png";
import slime5 from "./images/hurPage/slime5.png";
import slime6 from "./images/hurPage/slime6.png";
import strom1 from "./images/hurPage/strom1.png";
import strom2 from "./images/hurPage/strom2.png";
import strom3 from "./images/hurPage/strom3.png";
import srdce from "./images/hurPage/srdce.png";
import cedule from "./images/hurPage/cedule.png";





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
                <img loading="lazy" src={devetsilChar1} alt="" />
          </div>
          <div className="devetsilChar">
                <p>Chůze</p>
                <img loading="lazy" src={devetsilChar2} alt="" />
          </div>
          <div className="devetsilChar">
                <p>Smrt</p>
                <img loading="lazy" src={devetsilChar3} alt="" />
          </div>
          

        </div>
        <div className="slimeGallery">
                <img loading="lazy" src={slime1} alt="" />
                <img loading="lazy" src={slime2} alt="" />
                <img loading="lazy" src={slime3} alt="" />
                <img loading="lazy" src={slime4} alt="" />
                <img loading="lazy" src={slime5} alt="" />
                <img loading="lazy" src={slime6} alt="" />
        </div>

        <div className="slimeGallery">
                <img loading="lazy" src={strom1} alt="" />
                <img loading="lazy" src={strom2} alt="" />
                <img loading="lazy" src={strom3} alt="" />
                <div className="juniorGalleryL">
                  <img loading="lazy" src={srdce} alt="" />
                  <img loading="lazy" src={cedule} alt="" />
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
