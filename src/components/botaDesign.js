import React from 'react'
import "./hurJunior.css";
import botaDesign1 from "./images/hurPage/botaDesign1.svg";
import botaDesign2 from "./images/hurPage/botaDesign2.svg";
import botaDesign3 from "./images/hurPage/botaDesign3.svg";
import botaDesign4 from "./images/hurPage/botaDesign4.svg";







function BotaDesign() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h3>Jednotlivé stránky – design </h3>
            <h2>Bubble led shoes</h2>
        </div>
        <div className="juniorGalleryS">
                <img loading="lazy" src={botaDesign1} alt="" />
                <img loading="lazy" src={botaDesign2} alt="" />
                <img loading="lazy" src={botaDesign3} alt="" />
                <img loading="lazy" src={botaDesign4} alt="" />
        </div>
        <div className="juniorTags">
          <ul>
            <li id='juniorStories'>Brožura</li>
            <li id='juniorStories'>Design</li>
          </ul>
        </div>
    </div>
  )
}

export default BotaDesign
