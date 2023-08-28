import React from "react";
import "./Portfolio.css";

import hurricanes from "./images/portfolio/hurricanes.svg";
import windstorms from "./images/portfolio/windstorms.svg";
import myAge from "./images/portfolio/myAge.svg";

import wcServis from "./images/portfolio/wcServis.svg";
import bohemia from "./images/portfolio/bohemia.svg";

import hurricanesMik from "./images/portfolio/hurricanesMik.svg";
import wedry from "./images/portfolio/wedry.svg";

import spaceMission from "./images/portfolio/spaceMission.svg";
import devetsil from "./images/portfolio/devetsil.svg";

import menu from "./images/portfolio/menu.svg";
import kalendar from "./images/portfolio/kalendar.svg";


import { Link } from "react-router-dom";


function Portfolio() {
  
    return (

    <div className="portfolioContainer">
      <div className="grafikaContainer">

        <h1>
          Online Grafika
        </h1>

        <div className="onlineGrafika">



          <p className="container">
            <Link to="/Hurricanes">
              <img  className="image" src={hurricanes} alt="hurricanes" />
            </Link>
            <div className="overlay">
              <div className="text"><h1>Jičín Hurricanes</h1></div>
            </div>
          </p>


          <p className="container">
            <Link to="/Windstorms">
              <img  className="image" src={windstorms} alt="windstorms" />
            </Link>
            <div className="overlay">
              <div className="text"><h1>Jičín Windstorms</h1></div>
            </div>
          </p>


          <p className="container">
            <Link to="/MyAge">
              <img  className="image" src={myAge} alt="MyAge" />
            </Link>
            <div className="overlay">
              <div className="text"><h1>MyAge</h1></div>
            </div>
          </p>

          

          </div>

          <p id="ShowMore">
            <Link to="/OnlineGrafika">
              Zobrazit vše
            </Link>
          </p>

      </div>

      <div className="spacer"></div>


      <div className="grafikaContainer">

        <h1>
          Webdesign
        </h1>

        <div className="projektyGrafika">

        <p className="container">
            <Link to="/WcRent">
              <img  className="image" src={wcServis} alt="" />
            </Link>
          <div className="overlay">
            <div className="text"><h1>WcRent</h1></div>
          </div>
        </p>

        <p className="container">
            <Link to="/Likvidace">
              <img  className="image" src={bohemia} alt="" />
            </Link>
          <div className="overlay">
            <div className="text"><h1>Bohemia Scrap</h1></div>
          </div>
        </p>
        </div>

      </div>

      <div className="spacer"></div>

      <div className="grafikaContainer">

      
        <h1>
          Oblečení
        </h1>

        <div className="onlineGrafika">

          <p className="container">
            <Link to="/HurricanesMerch">
              <img  className="image" src={hurricanesMik} alt="hurricanes" />
            </Link>
          <div className="overlay">
            <div className="text"><h1>Hurricanes mikina</h1></div>
          </div>
        </p>

        <p className="container">
          <Link to="/WedryPage">
            <img  className="image" src={wedry} alt="hurricanes" />
          </Link>
          <div className="overlay">
            <div className="text"><h1>Merch</h1></div>
          </div>
        </p>
        </div>

        <p id="ShowMore">
          <Link to="/ObleceniPage">
            Zobrazit vše
          </Link>
        </p>

      </div>


            <div className="spacer"></div>


      <div className="grafikaContainer">

        <h1>
          Herní design
        </h1>

        <div className="projektyGrafika">
        <p className="container">
          <Link to="/SpaceMission">
            <img  className="image" src={spaceMission} alt="" />
          </Link>
          <div className="overlay">
            <div className="text"><h1>Space Mission</h1></div>
          </div>
        </p>

        <p className="container">
          <Link to="/Devetsil">
            <img  className="image" src={devetsil} alt="" />
          </Link>
          <div className="overlay">
            <div className="text"><h1>Devětsil</h1></div>
          </div>
        </p>
        </div>

      </div>

      <div className="spacer"></div>

      <div className="grafikaContainer">

        <h1>
          Tiskoviny
        </h1>

        <div className="TiskGrafika">
        <p className="container">
          <Link to="/Menu">
            <img  className="image" src={menu} alt="" />
          </Link>
          <div className="overlay">
            <div className="text"><h1>Table tent</h1></div>
          </div>
        </p>
        <p className="container" href="">
          <Link to="/Kalendar">
            <img  className="image" src={kalendar} alt="" />
          </Link>
          <div className="overlay">
            <div className="text"><h1>Kalendář</h1></div>
          </div>
        </p>

        </div>

        <h2 id="ShowMore">
          <Link to="/TiskPage" >
          Zobrazit vše
          </Link>
        </h2>

      </div>


      
      
      
      

      <div className="spacer"></div>


















    </div>
    );
  }

export default Portfolio;
