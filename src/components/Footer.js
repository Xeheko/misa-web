import React from "react";
import "./Footer.css";
import logo from "./images/logo_hlavni.svg"
import FB from "./images/FB.svg";
import YT from "./images/YT.svg";
import BE from "./images/BE.svg";
import IG from "./images/IG.svg";
import {Link} from "react-router-dom";


function Footer() {

    return(
        <>
        <div className="footer">
            <div className="footerL">
                <img  src={logo} alt="logo" />
            </div>
            <div className="footerR">
                <div className="RL">
                    <h2>IČ: 19313411</h2>
                    <h2>© 2023</h2>
                </div>
                <div className="RR">
                    <h2> <Link to="/Osobni">Ochrana osobních údajů</Link></h2>
                    <h2><Link to="/Cookies">Zásady cookies</Link></h2>
                </div>
            </div>
            <div className="footerSoc">
                    <div className="footerSoc1">
                        <a href="https://www.youtube.com/@michaelamrazkova1034" target="_blank" rel="noopener noreferrer"><img  src={YT} alt="YT"></img></a>
                        <a href="https://www.facebook.com/michaela.mrazkova.756" target="_blank" rel="noopener noreferrer"><img  src={FB} alt="FB"></img></a>
                    </div>
                    <div className="footerSoc2">
                        <a href="https://www.behance.net/michaelamrzkov1" target="_blank" rel="noopener noreferrer"><img  src={BE} alt="BE"></img></a>
                        <a href="https://www.instagram.com/mrazkova_design/" target="_blank" rel="noopener noreferrer"><img  src={IG} alt="IG"></img></a>
                    </div>
            </div>
        </div>
        </>

    )
}

export default Footer