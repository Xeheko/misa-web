import React from "react";
import "./HurPage.css";
import Navbar from "./components/otherNavbar";
import { Link } from "react-router-dom";
import arrowL from "./components/images/arrowL.svg";
import ScrapTitle from "./components/scrapTitle";
import ScrollToTop from "./ScrollToTop";
import ScrapLetak from "./components/scrapLetak";
import ScrapLogo from "./components/scrapLogo";
import Footer from "./components/Footer";



function ScrapPage() {

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
                <ScrapTitle />
            </div>

            <div className="hurPageContent">
                <div className="hurJuniorE">
                    <ScrapLetak />
                </div>
                <div className="hurJuniorE">
                    <ScrapLogo />
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

export default ScrapPage