import React from "react";
import "./Soc_hl.css";
import FB from "./images/FB.svg";
import YT from "./images/YT.svg";
import BE from "./images/BE.svg";


function Soc_hl() {
    return(
        <>
        <div className="SocImg">
            <a href="https://www.facebook.com/michaela.mrazkova.756" target="_blank" rel="noopener noreferrer"><img loading="lazy" loading="lazy" src={FB} alt="FB"></img></a>
            <a href="https://www.youtube.com/@michaelamrazkova1034" target="_blank" rel="noopener noreferrer"><img loading="lazy" loading="lazy" src={YT} alt="YT"></img></a>
            <a href="https://www.behance.net/michaelamrzkov1" target="_blank" rel="noopener noreferrer"><img loading="lazy" loading="lazy" src={BE} alt="BE"></img></a>
        </div>
        </>

    )
}

export default Soc_hl