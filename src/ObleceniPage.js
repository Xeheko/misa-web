import React from "react";
import "./grafikaPage.css";
import Navbar from "./components/otherNavbar";
import { Link } from "react-router-dom";
import arrowL from "./components/images/arrowL.svg";
import ScrollToTop from "./ScrollToTop";
import Footer from "./components/Footer";

import hurricanesMik from "./components/images/portfolio/hurricanesMik.svg";
import house from "./components/images/portfolio/house.svg";
import wedry from "./components/images/portfolio/wedry.svg";
import raketaci from "./components/images/portfolio/raketaci.svg";






function ObleceniPage() {


    const handleBackClick = () => {
        window.history.back();

      };
    return(
        <>
            <ScrollToTop />
            <div className="Topbar">
                <Navbar />
            </div>
        <div className="onlinePage">

            <div className="onlinePageContent">
                <h1>OBLEČENÍ</h1>




                <div className="obleceniPageContentImages">



                    <p className="container">
                        <Link to="/HurricanesMerch">
                            <img  className="image" src={hurricanesMik} alt="" />
                        </Link>
                        <div className="overlay">
                            <div className="text"><h1>Hurricanes mikina</h1></div>
                        </div>
                    </p>

                    <p className="container">
                        <Link to="/HousePage">
                            <img  className="image" src={house} alt="" />
                        </Link>
                        <div className="overlay">
                            <div className="text"><h1>Merch</h1></div>
                        </div>
                    </p>

                    <p className="container">
                        <Link to="/WedryPage">
                            <img  className="image" src={wedry} alt="" />
                        </Link>
                        <div className="overlay">
                            <div className="text"><h1>Merch</h1></div>
                        </div>
                    </p>
                    <p className="container">
                        <Link to="/Raketaci">
                            <img  className="image" src={raketaci} alt="" />
                        </Link>
                        <div className="overlay">
                            <div className="text"><h1>Merch</h1></div>
                        </div>
                    </p>


                </div>

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


        </>

    )
}

export default ObleceniPage