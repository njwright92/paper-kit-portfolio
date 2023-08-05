/*!

=========================================================
* Paper Kit React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import SectionButtons from "views/index-sections/SectionButtons.js";
import SectionCarousel from "views/index-sections/SectionCarousel.js";
import SectionLogin from "views/index-sections/SectionLogin.js";
import SectionExamples from "views/index-sections/SectionExamples.js";

// Import the styles.css file for smooth scrolling effect
import "../assets/css/styles.css";

function Index() {
  // Add state to handle the scroll position
  const [scrollY, setScrollY] = React.useState(0);

  // useEffect to update the scroll position on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add event listener to window scroll event
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate the transform value for smooth scrolling effect
  const transformValue = `translate3d(0, ${-scrollY * 0.3}px, 0)`;

  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <div className="main" style={{ transform: transformValue }}>
        <SectionButtons />
        <SectionCarousel />
        <SectionExamples />
        <SectionLogin />
        <DemoFooter />
      </div>
    </>
  );
}

export default Index;

