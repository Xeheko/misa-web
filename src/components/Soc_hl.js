import React from "react";
import "./Soc_hl.css";
import FB from "./images/FB.svg";
import YT from "./images/YT.svg";
import BE from "./images/BE.svg";
import IG from "./images/IG.svg";


function Soc_hl() {
    return(
        <>
        <div className="SocImg">
            <a href="https://www.behance.net/michaelamrzkov1" target="_blank" rel="noopener noreferrer"><img  src={IG} alt="IG"></img></a>
            <a href="https://www.behance.net/michaelamrzkov1" target="_blank" rel="noopener noreferrer"><img  src={BE} alt="BE"></img></a>
            <a href="https://www.facebook.com/michaela.mrazkova.756" target="_blank" rel="noopener noreferrer"><img  src={FB} alt="FB"></img></a>
            <a href="https://www.youtube.com/@michaelamrazkova1034" target="_blank" rel="noopener noreferrer"><img  src={YT} alt="YT"></img></a>
        </div>
        </>

    )
}

export default Soc_hl