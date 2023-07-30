import React from "react";
import "./HurPage.css";
import Navbar from "./components/otherNavbar";
import { Link } from "react-router-dom";
import arrowL from "./components/images/arrowL.svg";
import PlesTitle from "./components/plesTitle";
import ScrollToTop from "./ScrollToTop";
import PlesPoster from "./components/plesPoster";
import PlesDesign from "./components/plesDesign";
import Footer from "./components/Footer";




function PlesPage() {


    return(
        <>
        <div className="HurPage">
            <ScrollToTop />
            <div className="Topbar">
                <Navbar />
            </div>

            <div className="hurTitleScreen">
                <PlesTitle />
            </div>

            <div className="hurPageContent">
                <div className="hurJunior">
                    <PlesPoster />
                </div>
                <div className="hurJunior">
                    <PlesDesign />
                </div>
<div className="hurBottomBar">
                <ul className="hurmenu">
                    <div className="hurBack">
                        <img loading="lazy" src={arrowL} alt="" />
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
            </div>
                </>

    )
}

export default PlesPage