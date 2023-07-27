import React from "react";
import "./grafikaPage.css";
import Navbar from "./components/otherNavbar";
import { Link } from "react-router-dom";
import arrowL from "./components/images/arrowL.svg";
import ScrollToTop from "./ScrollToTop";
import Footer from "./components/Footer";


import menu from "./components/images/portfolio/menuS.png";
import kalendar from "./components/images/portfolio/kalendarS.png";
import bohemiaLetak from "./components/images/portfolio/bohemiaLetak.png";
import ples from "./components/images/portfolio/plesS.png";
import ishowroom from "./components/images/portfolio/ishowroom.png";
import cola from "./components/images/portfolio/colaS.png";
import bota from "./components/images/portfolio/bota.png";
import PF from "./components/images/portfolio/PF.png";






function ObleceniPage() {


    return(
        <>
            <ScrollToTop />
            <div className="Topbar">
                <Navbar />
            </div>
        <div className="onlinePage">

            <div className="onlinePageContent">
                <h1>TISKOVINY</h1>




                <div className="TiskPageContentImages">



                <p className="container">
                    <Link to="/Menu">
                        <img loading="lazy" className="image" src={menu} alt="" />
                    </Link>
                    <div className="overlay">
                        <div className="text"><h1>Table tent</h1></div>
                    </div>
                </p>
                <p className="container">
                    <Link to="/Kalendar">
                        <img loading="lazy" className="image" src={kalendar} alt="" />
                    </Link>
                    <div className="overlay">
                        <div className="text"><h1>Kalendář</h1></div>
                    </div>
                </p>
                <p className="container">
                    <Link to="/BohemiaScrap">
                        <img loading="lazy" className="image" src={bohemiaLetak} alt="" />
                    </Link>
                    <div className="overlay">
                        <div className="text"><h1>Kalendář</h1></div>
                    </div>
                </p>
                <p className="container">
                    <Link to="/Ples">
                        <img loading="lazy" className="image" src={ples} alt="" />
                    </Link>
                    <div className="overlay">
                        <div className="text"><h1> Plakát událost</h1></div>
                    </div>
                </p>
                <p className="container">
                    <Link to="/IShowroom">
                        <img loading="lazy" className="image" src={ishowroom} alt="" />
                    </Link>
                    <div className="overlay">
                        <div className="text"><h1> Plakát událost</h1></div>
                    </div>
                </p>
                <p className="container">
                    <Link to="/Cola">
                        <img loading="lazy" className="image" src={cola} alt="" />
                    </Link>
                    <div className="overlay">
                        <div className="text"><h1>Reklamní cedule</h1></div>
                    </div>
                </p>
                <p className="container">
                    <Link to="/Shoes">
                        <img loading="lazy" className="image" src={bota} alt="" />
                    </Link>
                    <div className="overlay">
                        <div className="text"><h1>Brožura</h1></div>
                    </div>
                </p>
                <p className="container">
                    <Link to="/PF">
                        <img loading="lazy" className="image" src={PF} alt="" />
                    </Link>
                    <div className="overlay">
                        <div className="text"><h1>PF 2021</h1></div>
                    </div>
                </p>

                </div>

            </div>

            <div className="BottomBar">
                <ul className="hurmenu">
                    <div className="hurBack">
                        <img loading="lazy" src={arrowL} alt="" />
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


        </>

    )
}

export default ObleceniPage