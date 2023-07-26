import React from 'react'
import "./hurJunior.css";
import email from "./images/hurPage/wcEmail.svg";


function WcEmail() {
  return (
    <div className='juniorAll'>
        <div className="juniorHeader">
            <h3>Projekt</h3>
            <h2>Veselé Velikonoce WC servis</h2>
        </div>
        <div className="juniorGallery">
                <img src={email} alt="" />
        </div>
        <div className="juniorTags">
          <ul>
            <li id='juniorStories'>podpis</li>
            <li id='juniorStories'>e-mail</li>
          </ul>
        </div>
    </div>
  )
}

export default WcEmail
