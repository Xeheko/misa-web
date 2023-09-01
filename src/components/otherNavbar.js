import React, { useState, useEffect } from "react";
import "./otherNavbar.css";
import arrowL from "./images/arrowL.svg";
import { Link } from "react-router-dom";

function OtherNavbar() {
  const [otherColor, setOtherColor] = useState(false);

  useEffect(() => {
    const changeOtherColor = () => {
      if (document.documentElement.scrollTop >= 10) {
        setOtherColor(true);
        console.log("scrolluju");
      } else {
        setOtherColor(false);
      }
    };
    document.addEventListener("scroll", changeOtherColor);
    return () => {
      document.removeEventListener("scroll", changeOtherColor);
    };
  }, []);

  const handleBackClick = () => {
    window.history.back();

  };



  return (
    <div className={otherColor ? "hurHeader hurHeader-bg" : "hurHeader"}>
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
  );
}

export default OtherNavbar;
