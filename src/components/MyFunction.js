import React, { useEffect, useRef } from "react";

function MyFunction() {
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
      ".CardL, .CardR, .Soc_hl, .content_text, .Contactbtn, .PerkR, .PerkL, .leftSide, .rightSide"
    );
    hiddenElements.forEach((el) => observer.current.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.current.unobserve(el));
    };
  }, []);

  return null;
}

export default MyFunction;
