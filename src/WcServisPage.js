import React from "react";
import "./HurPage.css";
import Navbar from "./components/otherNavbar";
import { Link } from "react-router-dom";
import arrowL from "./components/images/arrowL.svg";
import WcTitle from "./components/wcTitle";
import WcVelikonoce from "./components/wcVelikonoce";
import ScrollToTop from "./ScrollToTop";
import WcEmail from "./components/wcEmail";
import Footer from "./components/Footer";




function WcServisPage() {

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
                <WcTitle />
            </div>

            <div className="hurPageContent">
                <div className="hurJunior">
                  <WcVelikonoce />
                </div>
                <div className="hurZlin">
                    <WcEmail />
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

export default WcServisPage