import React from "react";
import "./HurPage.css";
import Navbar from "./components/otherNavbar";
import { Link } from "react-router-dom";
import arrowL from "./components/images/arrowL.svg";
import WinTitle from "./components/winTitle";
import WinFirst from "./components/winFirst";
import ScrollToTop from "./ScrollToTop";
import WinSec from "./components/winSec";
import WinThird from "./components/winThird";
import Footer from "./components/Footer";



function WinPage() {



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
                <WinTitle />
            </div>

            <div className="hurPageContent">
                <div className="hurJunior">
                    <WinFirst />
                </div>
                <div className="hurZlin">
                  <WinSec />
                </div>
                <div className="hurSchedule">
                  <WinThird />
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

export default WinPage