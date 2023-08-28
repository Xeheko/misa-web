import React from "react";
import "./HurPage.css";
import Navbar from "./components/otherNavbar";
import { Link } from "react-router-dom";
import arrowL from "./components/images/arrowL.svg";
import BotaTitle from "./components/botaTitle";
import ScrollToTop from "./ScrollToTop";
import BotaMockup from "./components/botaMockup";
import BotaDesign from "./components/botaDesign";
import BotaPoster from "./components/botaPoster";
import BotaFoto from "./components/botaFoto";
import Footer from "./components/Footer";




function BotaPage() {

    const handleBackClick = () => {
        window.history.back();

      };

    return(
        <>
        <div className="HurPage">
            <ScrollToTop />
            <div className="Topbar">
                <Navbar />
            </div>

            <div className="hurTitleScreen">
                <BotaTitle />
            </div>

            <div className="hurPageContent">
                <div className="hurJuniorE">
                    <BotaMockup />
                </div>
                <div className="hurJuniorE">
                    <BotaDesign />
                </div>
                <div className="hurJuniorE">
                    <BotaPoster />
                </div>
                <div className="hurJuniorE">
                    <BotaFoto />
                </div>
            </div>
<div className="hurBottomBar">
                <ul className="hurmenu">
                    <div className="hurBack">
                        <img  src={arrowL} alt="" />
                    <li>
                        <p>
                            <Link href="#" onClick={handleBackClick}>
                                ZPĚT NA PORTFOLIO
                            </Link>
                        </p>
                    </li>
                    </div>
                </ul>
            </div>
            </div>
                <div className="hurFooter">
                  <Footer />
                </div>
                </>

    )
}

export default BotaPage