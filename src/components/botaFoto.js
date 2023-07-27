import React from 'react'
import "./hurJunior.css";
import botaFoto1 from "./images/hurPage/botaFoto1.png";
import botaFoto2 from "./images/hurPage/botaFoto2.png";









function BotaFoto() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h3>Jednotlivé stránky – design </h3>
            <h2>Bubble led shoes</h2>
        </div>
        <div className="juniorGalleryS">
                <img loading="lazy" src={botaFoto1} alt="" />
                <img loading="lazy" src={botaFoto2} alt="" />
        </div>
        <div className="juniorTags">
          <ul>
            <li id='juniorStories'>Fotografie</li>
            <li id='juniorStories'>3D Render</li>
          </ul>
        </div>
    </div>
  )
}

export default BotaFoto
