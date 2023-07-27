import React from "react";
import "./grafikaPage.css";
import Navbar from "./components/otherNavbar";
import { Link } from "react-router-dom";
import arrowL from "./components/images/arrowL.svg";
import ScrollToTop from "./ScrollToTop";
import Footer from "./components/Footer";



import hurricanes from "./components/images/portfolio/hurricanes.png";
import windstorms from "./components/images/portfolio/windstorms.png";
import myAge from "./components/images/portfolio/myAge.png";
import alza from "./components/images/portfolio/alza.png";
import calm2be from "./components/images/portfolio/calm2be.png";
import wcVelikonoce from "./components/images/portfolio/wcVelikonoce.png";
import fotbal from "./components/images/portfolio/fotbal.png";
import mixit from "./components/images/portfolio/mixit.png";





function onlinePage() {


    return(
        <>
            <ScrollToTop />
            <div className="Topbar">
                <Navbar />
            </div>
        <div className="onlinePage">

            <div className="onlinePageContent">
                <h1>ONLINE GRAFIKA</h1>




                <div className="obleceniPageContentImages">



                    <p className="container">
                        <Link to="/Hurricanes">
                            <img loading="lazy" className="image" src={hurricanes} alt="hurricanes" />
                        </Link>
                        <div className="overlay">
                            <div className="text"><h1>Jičín Hurricanes</h1></div>
                        </div>
                    </p>

                
                    <p className="container">
                        <Link to="/Windstorms">
                            <img loading="lazy" className="image" src={windstorms} alt="windstorms" />
                        </Link>
                        <div className="overlay">
                            <div className="text"><h1>Jičín Windstorms</h1></div>
                        </div>
                    </p>
                    <p className="container">
                        <Link to="/MyAge">
                            <img loading="lazy" className="image" src={myAge} alt="MyAge" />
                        </Link>
                        <div className="overlay">
                            <div className="text"><h1>MyAge</h1></div>
                        </div>
                    </p>

                    <p className="container">
                        <Link to="/Alza">
                            <img loading="lazy" className="image" src={alza} alt="hurricanes" />
                        </Link>
                        <div className="overlay">
                            <div className="text"><h1>Alza</h1></div>
                        </div>
                    </p>
                    <p className="container">
                        <Link to="/Calm2Be">
                            <img loading="lazy" className="image" src={calm2be} alt="Calm2Be" />
                        </Link>
                        <div className="overlay">
                            <div className="text"><h1>Calm2Be</h1></div>
                        </div>
                    </p>
                    <p className="container">
                        <Link to="/WcServis">
                            <img loading="lazy" className="image" src={wcVelikonoce} alt="Calm2Be" />
                        </Link>
                        <div className="overlay">
                            <div className="text"><h1>WcServis</h1></div>
                        </div>
                    </p>
                    <p className="container">
                        <Link to="/Sparta">
                            <img loading="lazy" className="image" src={fotbal} alt="MyAge" />
                        </Link>
                        <div className="overlay">
                            <div className="text"><h1>Fotbalové karty</h1></div>
                        </div>
                    </p>
                    <p className="container">

                            <img loading="lazy" className="image" src={mixit} alt="windstorms" />

                        <div className="overlay">
                            <div className="text"><h1>Mixit</h1></div>
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

            <div className="footer">
                <Footer />
            </div>

        </div>
        </>

    )
}

export default onlinePage