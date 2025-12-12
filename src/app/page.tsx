"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Components
import IndexNavbar from "components/Navbars/IndexNavbar";
import IndexHeader from "components/Headers/IndexHeader";
import DemoFooter from "components/Footers/DemoFooter";
import BackToTop from "components/backToTop";

// Views
import SectionButtons from "views/index-sections/SectionButtons";
import SectionCarousel from "views/index-sections/SectionCarousel";
import SectionLogin from "views/index-sections/SectionLogin";
import SectionExamples from "views/index-sections/SectionExamples";

// Assets
const output = "/output.mp4";

export default function Home() {
  const [showGif, setShowGif] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const renderGif = () => (
    <div style={{ width: "100%", position: "relative", height: "3.5em" }}>
      <video
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "3.5em",
          objectFit: "cover",
        }}
        loop
        autoPlay
        muted
        playsInline
        onError={() => {
          setShowGif(false);
        }}
      >
        <source src={output} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );

  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      {showGif && renderGif()}
      <div className="main">
        <BackToTop />
        <div id="section-buttons" data-aos="fade-up">
          <SectionButtons />
        </div>
        {showGif && renderGif()}

        <div id="section-examples" data-aos="fade-up">
          <SectionExamples />
        </div>
        {showGif && renderGif()}

        <div id="section-carousel" data-aos="fade-up">
          <SectionCarousel />
        </div>
        {showGif && renderGif()}

        <div id="section-login" data-aos="fade-up">
          <SectionLogin />
        </div>
        {showGif && renderGif()}

        <DemoFooter />
      </div>
    </>
  );
}
