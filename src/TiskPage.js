import React from "react";
import "./grafikaPage.css";
import Navbar from "./components/otherNavbar";
import { Link } from "react-router-dom";
import arrowL from "./components/images/arrowL.svg";
import ScrollToTop from "./ScrollToTop";



import menu from "./components/images/portfolio/menuS.svg";
import kalendar from "./components/images/portfolio/kalendar.svg";
import bohemiaLetak from "./components/images/portfolio/bohemiaLetak.svg";
import ples from "./components/images/portfolio/plesS.svg";
import ishowroom from "./components/images/portfolio/ishowroom.svg";
import cola from "./components/images/portfolio/colaS.svg";
import bota from "./components/images/portfolio/bota.svg";
import PF from "./components/images/portfolio/PF.svg";






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
                <h1>TISKOVINY</h1>




                <div className="TiskPageContentImages">



                <p className="container">
                    <Link to="/Menu">
                        <img  className="image" src={menu} alt="" />
                    </Link>
                    <div className="overlay">
                        <div className="text"><h1>Table tent</h1></div>
                    </div>
                </p>
                <p className="container">
                    <Link to="/Kalendar">
                        <img  className="image" src={kalendar} alt="" />
                    </Link>
                    <div className="overlay">
                        <div className="text"><h1>Kalendář</h1></div>
                    </div>
                </p>
                <p className="container">
                    <Link to="/BohemiaScrap">
                        <img  className="image" src={bohemiaLetak} alt="" />
                    </Link>
                    <div className="overlay">
                        <div className="text"><h1>Kalendář</h1></div>
                    </div>
                </p>
                <p className="container">
                    <Link to="/Ples">
                        <img  className="image" src={ples} alt="" />
                    </Link>
                    <div className="overlay">
                        <div className="text"><h1> Plakát událost</h1></div>
                    </div>
                </p>
                <p className="container">
                    <Link to="/IShowroom">
                        <img  className="image" src={ishowroom} alt="" />
                    </Link>
                    <div className="overlay">
                        <div className="text"><h1> Plakát událost</h1></div>
                    </div>
                </p>
                <p className="container">
                    <Link to="/Cola">
                        <img  className="image" src={cola} alt="" />
                    </Link>
                    <div className="overlay">
                        <div className="text"><h1>Reklamní cedule</h1></div>
                    </div>
                </p>
                <p className="container">
                    <Link to="/Shoes">
                        <img  className="image" src={bota} alt="" />
                    </Link>
                    <div className="overlay">
                        <div className="text"><h1>Brožura</h1></div>
                    </div>
                </p>
                <p className="container">
                    <Link to="/PF">
                        <img  className="image" src={PF} alt="" />
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


        </>

    )
}

export default ObleceniPage