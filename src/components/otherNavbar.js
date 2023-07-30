import React, { useState, useEffect } from "react";
import "./otherNavbar.css";
import arrowL from "./images/arrowL.svg";

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



  return (
    <div className={otherColor ? "hurHeader hurHeader-bg" : "hurHeader"}>
        <ul className="hurmenu">
            <div className="hurBack">
                <img loading="lazy" src={arrowL} alt="" />
            <li>
              <a href="javascript:history.back()">
                    ZPĚT NA PORTFOLIO
                </a>
          </li>
          </div>
        </ul>
        </div>
  );
}

export default OtherNavbar;
