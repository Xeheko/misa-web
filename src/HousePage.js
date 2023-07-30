import React from "react";
import "./HurPage.css";
import Navbar from "./components/otherNavbar";
import { Link } from "react-router-dom";
import arrowL from "./components/images/arrowL.svg";
import HouseTitle from "./components/houseTitle";
import HouseDesign from "./components/houseDesign";
import ScrollToTop from "./ScrollToTop";
import HouseMerch from "./components/houseMerch";
import Footer from "./components/Footer";



function HousePage() {

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
                <HouseTitle />
            </div>

            <div className="hurPageContent">
                <div className="hurJunior">
                    <HouseMerch />
                </div>
                <div className="hurJuniorE">
                    <HouseDesign />
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

export default HousePage