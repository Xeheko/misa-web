import React from "react";
import "./HurPage.css";
import Navbar from "./components/otherNavbar";
import { Link } from "react-router-dom";
import arrowL from "./components/images/arrowL.svg";
import ScrollToTop from "./ScrollToTop";
import HurTitle from "./components/hurTitle";
import HurJunior from "./components/hurJunior";
import HurZlin from "./components/hurZlin";
import HurSchedule from "./components/hurSchedule";
import HurTrut from "./components/hurTrut";
import HurMan from "./components/hurMan";
import HurScore from "./components/hurScore";
import Footer from "./components/Footer";




function HurPage() {


    return(
        <>
        <div className="HurPage">
            <ScrollToTop />
            <div className="Topbar">
                <Navbar />
            </div>

            <div className="hurTitleScreen">
                <HurTitle />
            </div>

            <div className="hurPageContent">
                <div className="hurJuniorE">
                    <HurJunior />
                </div>
                <div className="hurZlin">
                  <HurZlin />
                </div>
                <div className="hurSchedule">
                  <HurSchedule />
                </div>
                <div className="hurTrut">
                  <HurTrut />
                </div>
                <div className="hurManE">
                  <HurMan />                
                </div>
        {/* bude zmena "HurMan"*/}

                <div className="hurManE">
                  <HurScore />
                </div>
            <div className="hurBottomBar">
                <ul className="hurmenu">
                    <div className="hurBack">
                        <img loading="lazy" src={arrowL} alt="" />
                    <li>
                        <p>
                            <Link to="javascript:history.back()">
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
        </div>
        </>

    )
}

export default HurPage