import React from "react";
import "./HurPage.css";
import Navbar from "./components/otherNavbar";
import { Link } from "react-router-dom";
import arrowL from "./components/images/arrowL.svg";
import CalmTitle from "./components/CalmTitle";
import CalmWork from "./components/calmWork";
import ScrollToTop from "./ScrollToTop";
import CalmMotto from "./components/calmMotto";
import CalmDeti from "./components/calmDeti";
import Footer from "./components/Footer";



function CalmPage() {

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
                <CalmTitle />
            </div>

            <div className="hurPageContent">
                <div className="hurJunior">
                    <CalmMotto />
                </div>
                <div className="hurZlin">
                    <CalmDeti />
                </div>
                <div className="hurZlin">
                    <CalmWork />
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

export default CalmPage