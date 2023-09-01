import React from "react";
import "./HurPage.css";
import Navbar from "./components/otherNavbar";
import { Link } from "react-router-dom";
import arrowL from "./components/images/arrowL.svg";
import ColaTitle from "./components/colaTitle";
import ScrollToTop from "./ScrollToTop";
import ColaPoster from "./components/colaPoster";
import Footer from "./components/Footer";




function ColaPage() {

    const handleBackClick = () => {
        window.history.back();

      };

    return(
        <>
            <ScrollToTop />
        <div className="HurPage">
            <div className="Topbar">
                <Navbar />
            </div>

            <div className="hurTitleScreen">
                <ColaTitle />
            </div>

            <div className="hurPageContent">
                <div className="hurJuniorE">
                    <ColaPoster />
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
            </div>

        </>

    )
}

export default ColaPage