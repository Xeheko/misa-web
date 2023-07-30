import React, { useEffect } from "react";
import './App.css';


import Navbar from './components/Navbar';
import Sochl from './components/Soc_hl';
import Contenthl from './components/Content_hl';
import Contactbtn from "./components/Contactbtn";
import Header1 from "./components/Header_1";
import BubbleR from "./components/BubbleR";
import BubbleL from "./components/BubbleL";
import CardGraf from "./components/Cards/CardGraf";
import CardWeb from "./components/Cards/CardWeb";
import CardSoc from "./components/Cards/CardSoc";
import CardEdit from "./components/Cards/CardEdit";
import Programs from "./components/Programs";
import Header2 from "./components/Header_2";
import About from "./components/About";
import Header3 from "./components/Header_3";
import Portfolio from "./components/Portfolio";
import Header4 from "./components/Header_4";
import PerkCard from "./components/Perks/PerkCard";
import Form from "./components/Form";
import Footer from "./components/Footer";




function MainPage() {
  //animace pri scrollu
  const observer = React.useRef(
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    })
  );
  

  useEffect(() => {
    const hiddenElements = document.querySelectorAll(
      ".CardL, .CardR, .PerkR, .PerkL, .leftSide, .rightSide, .contactForm"
    );
    hiddenElements.forEach((el) => observer.current.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.current.unobserve(el));
    };
  }, []);
  

  return (
    <>
    <div className="App"> 
      <div className="MainPage" id="MainPage">
        <div className="bgImg">
            <div className="Topbar">
                <Navbar />
              </div>
        <div className="Content">
          <div className="content_hl">
            <div className="Soc_hl">
              <Sochl />
            </div>
            <div className="content_text">
              <Contenthl />
            </div>
          </div>
          <div className="Contactbtn">
              <Contactbtn />
            </div>
          </div>
          <div className='scroll'>
          </div>
        </div>
      </div>

      <div className="SecondPage" id="SecondPage">
          <div className="BubbleImg">
            <BubbleR />
          </div>
        <div className="Header1">
          <div className="HeaderTxt">
            <Header1 />
          </div>
        </div>
        <div className="main-section">
          <div className="CardL">
            <CardGraf className="Cards"/>
          </div>
          <div className="CardL">
            <CardWeb className="Cards"/>
          </div>
          <div className="CardR">
            <CardSoc className="Cards"/>
          </div>
          <div className="CardR ">
            <CardEdit className="Cards"/>
          </div>
        </div>
        <div className="BubbleL1">
          <div className="rotateL1">
            <BubbleL />
          </div>
        </div>
        </div>

        <div className="ProgramList">
          <Programs />
        </div>




        <div className="PortfolioPage" id="PortfolioPage">
          <div className="Header3">
            <Header3 />
          </div>
          <div className="portfolio">
            <Portfolio />

          </div>
        </div>


        <div className="AboutPage" id="AboutPage">
          <div className="BubHeader">
            <div className="Header2">
              <Header2 />
            </div>
            <div className="BubbleAbout">
              <div className="rotateAbout">
              <BubbleR />
              </div>
            </div>
          </div>
          <div className="aboutTextContent">
            <About />
          </div>
          <div className="BubbleR2">
            <div className="bubbleR2">
              <BubbleR />
            </div>
          </div>
        </div>
        

        <div className="vlastPage" id="vlastPage">
          <div className="BubbleR3">
            <div className="rotateVlast">
              <BubbleR />
            </div>
          </div>
            <div className="Header4">
              <Header4 />
            </div>
            <div className="perkPage">
              <div className="Perks">
                <PerkCard />
              </div>
            </div>
          </div>

          <div className="priceBorder">
            <div className="priceShadow">
              </div>
              <div className="priceBG">
                <div className="priceText">
                <h2>Jak poptávka a nacenění probíhá</h2>
                <p>Každá zakázka je specifická = jinak časově náročná. Proto Vám nejlépe nacením až konkrétní
                       zadání. Napište mi co nejpřesněji vaše zadání, texty, formát tiskoviny či rozsah webu, vaši 
                       představu, vzor od konkurence, přiložte fotky.. Skicovné, náhledy projektů si účtuji.</p>
                </div>
            </div>
          </div>


        <div className="formPage" id="formPage">
          <div className="BubbleR4">
            <BubbleR />
          </div>
          <div className="contactForm">
            <Form />
          </div>
        </div>

        <div className="Footer">
            <Footer />
        </div>
    </div>
    </>);
}

export default MainPage;
