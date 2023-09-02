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
import React, { useState } from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import SectionButtons from "views/index-sections/SectionButtons.js";
import SectionCarousel from "views/index-sections/SectionCarousel.js";
import SectionLogin from "views/index-sections/SectionLogin.js";
import SectionExamples from "views/index-sections/SectionExamples.js";
import BackToTop from "components/backToTop";
import RunningStream from "utils/runningStream";
import { Scrollama, Step } from 'react-scrollama';

function Index() {
  const [showGif, setShowGif] = useState(true);
  // eslint-disable-next-line
  const [currentStepIndex, setCurrentStepIndex] = useState(null);

  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      {showGif ? (
        <img
          src="https://usagif.com/wp-content/uploads/gifs/water-43.gif"
          alt="Running stream"
          style={{ width: '100%', height: '3.5em' }}
          onError={() => setShowGif(false)}
        />
      ) : (
        <RunningStream />
      )}
      <div className="main">
        <BackToTop />
        <Scrollama offset={0.3} onStepEnter={onStepEnter}>
          <Step data={1}>
            <div id="section-buttons">
              <SectionButtons />
            </div>
          </Step>
          {showGif ? (
            <img
              src="https://usagif.com/wp-content/uploads/gifs/water-43.gif"
              alt="Running stream"
              style={{ width: '100%', height: '3.5em' }}
              onError={() => setShowGif(false)}
            />
          ) : (
            <RunningStream />
          )}
          <Step data={2}>
            <div id="section-examples">
              <SectionExamples />
            </div>
          </Step>
          {showGif ? (
            <img
              src="https://usagif.com/wp-content/uploads/gifs/water-43.gif"
              alt="Running stream"
              style={{ width: '100%', height: '3.5em' }}
              onError={() => setShowGif(false)}
            />
          ) : (
            <RunningStream />
          )}
          <Step data={3}>
            <div id="section-carousel">
              <SectionCarousel />
            </div>
          </Step>
          {showGif ? (
            <img
              src="https://usagif.com/wp-content/uploads/gifs/water-43.gif"
              alt="Running stream"
              style={{ width: '100%', height: '3.5em' }}
              onError={() => setShowGif(false)}
            />
          ) : (
            <RunningStream />
          )}
          <Step data={4}>
            <div id="section-login">
              <SectionLogin />
            </div>
          </Step>
          {showGif ? (
            <img
              src="https://usagif.com/wp-content/uploads/gifs/water-43.gif"
              alt="Running stream"
              style={{ width: '100%', height: '3.5em' }}
              onError={() => setShowGif(false)}
            />
          ) : (
            <RunningStream />
          )}

          <DemoFooter />

        </Scrollama>
      </div>
    </>
  );
}


export default Index;