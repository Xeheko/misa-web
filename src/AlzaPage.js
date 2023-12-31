import React from "react";
import "./HurPage.css";
import Navbar from "./components/otherNavbar";
import { Link } from "react-router-dom";
import arrowL from "./components/images/arrowL.svg";
import AlzaTitle from "./components/alzaTitle";
import AlzaRek from "./components/alzaRek";
import ScrollToTop from "./ScrollToTop";
import AlzaNews from "./components/alzaNews";
import Footer from "./components/Footer";



function AlzaPage() {

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
                <AlzaTitle />
            </div>

            <div className="hurPageContent">
                <div className="hurJunior">
                  <AlzaRek />
                </div>
                <div className="hurZlin">
                    <AlzaNews />
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

export default AlzaPage