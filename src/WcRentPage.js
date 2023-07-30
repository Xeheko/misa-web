import React from "react";
import "./HurPage.css";
import Navbar from "./components/otherNavbar";
import { Link } from "react-router-dom";
import arrowL from "./components/images/arrowL.svg";
import ScrollToTop from "./ScrollToTop";
import WcRentTitle from "./components/wcRentTitle";
import WcRentMockup from "./components/wcRentMockup";
import WcRentWeb from "./components/wcRentWeb";
import Footer from "./components/Footer";




function WcRent() {

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

            <div className="noSnapTitle">
                <WcRentTitle />
            </div>

            <div className="hurPageContent">
                <div className="noSnap">
                    <WcRentMockup />
                </div>
                <div className="noSnap">
                    <WcRentWeb />
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

export default WcRent