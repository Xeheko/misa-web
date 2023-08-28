import React from "react";
import "./HurPage.css";
import Navbar from "./components/otherNavbar";
import { Link } from "react-router-dom";
import arrowL from "./components/images/arrowL.svg";
import ScrollToTop from "./ScrollToTop";
import LikvidaceTitle from "./components/likvidaceTitle";
import LikvidaceDesign from "./components/likvidaceDesign";
// import LikvidaceWeb from "./components/likvidaceWeb";
import Footer from "./components/Footer";



function LikvidacePage() {

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
                <LikvidaceTitle />
            </div>

            <div className="hurPageContent">
                <div className="noSnap">
                    <LikvidaceDesign />
                </div>
                {/* <div className="noSnap">
                    <LikvidaceWeb />
                </div> */}

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

export default LikvidacePage