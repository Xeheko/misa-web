import React from "react";
import "./grafikaPage.css";
import Navbar from "./components/otherNavbar";
import { Link } from "react-router-dom";
import arrowL from "./components/images/arrowL.svg";
import ScrollToTop from "./ScrollToTop";
import Footer from "./components/Footer";



import hurricanes from "./components/images/portfolio/hurricanes.svg";
import windstorms from "./components/images/portfolio/windstorms.svg";
import myAge from "./components/images/portfolio/myAge.svg";
import alza from "./components/images/portfolio/alza.svg";
import calm2be from "./components/images/portfolio/calm2be.svg";
import wcVelikonoce from "./components/images/portfolio/wcVelikonoce.svg";
import fotbal from "./components/images/portfolio/fotbal.svg";
import mixit from "./components/images/portfolio/mixit.svg";





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
                            <img className="image" src={hurricanes} alt="hurricanes" />
                        </Link>
                        <div className="overlay">
                            <div className="text"><h1>Jičín Hurricanes</h1></div>
                        </div>
                    </p>

                
                    <p className="container">
                        <Link to="/Windstorms">
                            <img className="image" src={windstorms} alt="windstorms" />
                        </Link>
                        <div className="overlay">
                            <div className="text"><h1>Jičín Windstorms</h1></div>
                        </div>
                    </p>
                    <p className="container">
                        <Link to="/MyAge">
                            <img className="image" src={myAge} alt="MyAge" />
                        </Link>
                        <div className="overlay">
                            <div className="text"><h1>MyAge</h1></div>
                        </div>
                    </p>

                    <p className="container">
                        <Link to="/Alza">
                            <img className="image" src={alza} alt="hurricanes" />
                        </Link>
                        <div className="overlay">
                            <div className="text"><h1>Alza</h1></div>
                        </div>
                    </p>
                    <p className="container">
                        <Link to="/Calm2Be">
                            <img className="image" src={calm2be} alt="Calm2Be" />
                        </Link>
                        <div className="overlay">
                            <div className="text"><h1>Calm2Be</h1></div>
                        </div>
                    </p>
                    <p className="container">
                        <Link to="/WcServis">
                            <img className="image" src={wcVelikonoce} alt="Calm2Be" />
                        </Link>
                        <div className="overlay">
                            <div className="text"><h1>WcServis</h1></div>
                        </div>
                    </p>
                    <p className="container">
                        <Link to="/Sparta">
                            <img className="image" src={fotbal} alt="MyAge" />
                        </Link>
                        <div className="overlay">
                            <div className="text"><h1>Fotbalové karty</h1></div>
                        </div>
                    </p>
                    <p className="container">

                            <img className="image" src={mixit} alt="windstorms" />

                        <div className="overlay">
                            <div className="text"><h1>Mixit</h1></div>
                        </div>
                    </p>

                </div>



            </div>

            <div className="BottomBar">
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

            <div className="footer">
                <Footer />
            </div>

        </div>
        </>

    )
}

export default onlinePage