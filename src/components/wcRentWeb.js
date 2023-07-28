import React from 'react'
import "./hurJunior.css";
import wcRentWeb1 from "./images/hurPage/wcRentWeb1.svg";
import wcRentWeb2 from "./images/hurPage/wcRentWeb2.svg";
import wcRentWeb3 from "./images/hurPage/wcRentWeb3.svg";



function WcRentWeb() {
  return (
    <div className='juniorAll'>

        <div className="juniorGalleryD">
                <img loading="lazy" src={wcRentWeb1} alt="" />
                <img loading="lazy" src={wcRentWeb2} alt="" />
                <img loading="lazy" src={wcRentWeb3} alt="" />
        </div>

    </div>
  )
}

export default WcRentWeb
