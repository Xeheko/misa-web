import React from "react";
import "./Footer.css";
import logo from "./images/logo_hlavni.svg"
import FB from "./images/FB.svg";
import YT from "./images/YT.svg";
import BE from "./images/BE.svg";
import {Link} from "react-router-dom";


function Footer() {

    return(
        <>
        <div className="footer">
            <div className="footerL">
                <img loading="lazy" src={logo} alt="logo" />
            </div>
            <div className="footerR">
                <div className="RL">
                    <h2>IČ: 0654545</h2>
                    <h2>© 2023</h2>
                </div>
                <div className="RR">
                    <h2> <Link to="/Osobni">Ochrana osobních údajů</Link></h2>
                    <h2><Link to="/Cookies">Zásady cookies</Link></h2>
                </div>
            </div>
            <div className="footerSoc">
                    <img loading="lazy" src={YT} alt="YouTube" />
                    <img loading="lazy" src={FB} alt="Facebook" />
                    <img loading="lazy" src={BE} alt="Behance" />
            </div>
        </div>
        </>

    )
}

export default Footer