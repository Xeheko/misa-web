import React from "react";
import "./HurPage.css";
import Navbar from "./components/otherNavbar";
import { Link } from "react-router-dom";
import arrowL from "./components/images/arrowL.svg";
import KalendarTitle from "./components/kalendarTitle";
import ScrollToTop from "./ScrollToTop";
import KalendarFirst from "./components/kalendarFirst";
import KalendarSecond from "./components/kalendarSecond";
import KalendarLynorit from "./components/kalendarLynorit";
import KalendarMockup from "./components/kalendarMockup";
import Footer from "./components/Footer";



function KalendarPage() {


    return(
        <>
        <div className="HurPage">
            <ScrollToTop />
            <div className="Topbar">
                <Navbar />
            </div>

            <div className="hurTitleScreen">
                <KalendarTitle />
            </div>

            <div className="hurPageContent">
                <div className="hurJunior">
                    <KalendarMockup />
                </div>
                <div className="hurJunior">
                    <KalendarFirst />
                </div>
                <div className="hurJunior">
                    <KalendarSecond />
                </div>
                <div className="hurJunior">
                    <KalendarLynorit />
                </div>
<div className="hurBottomBar">
                <ul className="hurmenu">
                    <div className="hurBack">
                        <img src={arrowL} alt="" />
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

export default KalendarPage