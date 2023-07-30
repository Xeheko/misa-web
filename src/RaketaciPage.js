import React from "react";
import "./HurPage.css";
import Navbar from "./components/otherNavbar";
import { Link } from "react-router-dom";
import arrowL from "./components/images/arrowL.svg";
import RaketaciTitle from "./components/raketaciTitle";
import ScrollToTop from "./ScrollToTop";
import RaketaciMerch from "./components/raketaciMerch";
import Footer from "./components/Footer";




function RaketaciPage() {


    return(
        <>
        <div className="HurPage">
            <ScrollToTop />
            <div className="Topbar">
                <Navbar />
            </div>

            <div className="hurTitleScreen">
                <RaketaciTitle />
            </div>

            <div className="hurPageContent">
                <div className="hurJunior">
                    <RaketaciMerch />
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

export default RaketaciPage