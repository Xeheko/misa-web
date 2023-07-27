import React, { useState, useEffect } from "react";
import "./HurPage.css";
import Navbar from "./components/otherNavbar";
import { Link } from "react-router-dom";
import arrowL from "./components/images/arrowL.svg";
import ScrollToTop from "./ScrollToTop";
import SpaceTitle from "./components/spaceTitle";
import SpaceContent from "./components/spaceContent";
import Footer from "./components/Footer";




function SpacePage() {

    return(
        <>
        <div className="HurPage">
            <ScrollToTop />
            <div className="Topbar">
                <Navbar />
            </div>

            <div className="noSnapTitle">
                <SpaceTitle />
            </div>

            <div className="hurPageContent">
                <div className="noSnap">
                    <SpaceContent />
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

export default SpacePage