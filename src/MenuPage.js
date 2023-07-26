import React from "react";
import "./HurPage.css";
import Navbar from "./components/otherNavbar";
import { Link } from "react-router-dom";
import arrowL from "./components/images/arrowL.svg";
import MenuTitle from "./components/menuTitle";
import ScrollToTop from "./ScrollToTop";
import MenuTent from "./components/menuTent";
import MenuDesign from "./components/menuDesign";
import Footer from "./components/Footer";



function MenuPage() {


    return(
        <>
        <div className="HurPage">
            <ScrollToTop />
            <div className="Topbar">
                <Navbar />
            </div>

            <div className="hurTitleScreen">
                <MenuTitle />
            </div>

            <div className="hurPageContent">
                <div className="hurJunior">
                    <MenuTent />
                </div>
                <div className="hurJunior">
                    <MenuDesign />
                </div>
<div className="hurBottomBar">
                <ul className="hurmenu">
                    <div className="hurBack">
                        <img src={arrowL} alt="" />
                    <li>
                        <p>
                            <Link to="javascript:history.back()">
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

export default MenuPage