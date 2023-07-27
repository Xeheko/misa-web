import React from "react";
import "./HurPage.css";
import Navbar from "./components/otherNavbar";
import { Link } from "react-router-dom";
import arrowL from "./components/images/arrowL.svg";
import WedryTitle from "./components/wedryTitle";
import WedryDesign from "./components/wedryDesign";
import ScrollToTop from "./ScrollToTop";
import WedryMerch from "./components/wedryMerch";
import Footer from "./components/Footer";



function WedryPage() {


    return(
        <>
        <div className="HurPage">
            <ScrollToTop />
            <div className="Topbar">
                <Navbar />
            </div>

            <div className="hurTitleScreen">
                <WedryTitle />
            </div>

            <div className="hurPageContent">
                <div className="hurJunior">
                    <WedryMerch />
                </div>
                <div className="hurJuniorE">
                    <WedryDesign />
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

export default WedryPage