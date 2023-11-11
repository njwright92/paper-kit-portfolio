import React, { useEffect, useState, useMemo } from "react";
import { Button } from "reactstrap";
import { throttle } from "lodash";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = useMemo(
    () =>
      throttle(() => {
        setIsVisible(window.pageYOffset > 300);
      }, 200),
    []
  );

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [toggleVisibility]);

  return (
    <div
      className="scroll-to-top"
      style={{
        position: "fixed",
        bottom: "1.25em",
        right: "1.25em",
        zIndex: 9999,
      }}
    >
      {isVisible && (
        <Button
          style={{
            backgroundColor: "transparent",
            border: "black",
            boxShadow: "none",
          }}
          onClick={scrollToTop}
        >
          <i
            className="arrow-button fa fa-arrow-up"
            aria-hidden="true"
            style={{ fontSize: "3em", margin: 2, color: "black" }}
          ></i>
        </Button>
      )}
    </div>
  );
};

export default BackToTop;
