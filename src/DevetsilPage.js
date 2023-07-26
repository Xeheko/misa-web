import React from "react";
import "./HurPage.css";
import Navbar from "./components/otherNavbar";
import { Link } from "react-router-dom";
import arrowL from "./components/images/arrowL.svg";
import ScrollToTop from "./ScrollToTop";
import DevetsilTitle from "./components/devetsilTitle";
import DevetsilContent from "./components/devetsilContent";
import DevetsilChar from "./components/devetsilChar";
import Footer from "./components/Footer";



function DevetsilPage() {

    return(
        <>
        <div className="HurPage">
            <ScrollToTop />
            <div className="Topbar">
                <Navbar />
            </div>

            <div className="noSnapTitle">
                <DevetsilTitle />
            </div>

            <div className="hurPageContent">
                <div className="noSnap">
                    <DevetsilContent />
                </div>
                <div className="noSnap">
                    <DevetsilChar />
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

export default DevetsilPage