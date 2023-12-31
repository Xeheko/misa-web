import React from "react";
import "./HurPage.css";
import Navbar from "./components/otherNavbar";
import { Link } from "react-router-dom";
import arrowL from "./components/images/arrowL.svg";
import ScrollToTop from "./ScrollToTop";
import HurTitle from "./components/hurTitle";
import HurJunior from "./components/hurJunior";
import HurZlin from "./components/hurZlin";
import HurSchedule from "./components/hurSchedule";
import HurTrut from "./components/hurTrut";
import HurScore from "./components/hurScore";
import Footer from "./components/Footer";
import HurFinale from "./components/hurFinale";
import HurLast from "./components/hurLast";




function HurPage() {

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
                <HurTitle />
            </div>

            <div className="hurPageContent">
                <div className="hurJunior">
                  <HurFinale />
                </div>
                <div className="hurZlin">
                  <HurZlin />
                </div>
                <div className="hurSchedule">
                  <HurSchedule />
                </div>
                <div className="hurTrut">
                  <HurTrut />
                </div>
                <div className="hurJuniorE">
                    <HurJunior />
                </div>
                {/* <div className="hurManE">
                  <HurMan />                
                </div> */}
        {/* bude zmena "HurMan"*/}

                <div className="hurManE">
                  <HurScore />
                </div>
                <div className="hurJuniorE">
                    <HurLast />
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

export default HurPage