import React, { useState, useCallback } from "react";
import {
  Card,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";
import "../../assets/css/SectionLogin.css";
import brewing from "../../assets/img/brewing.mp4";
import jetpack from "../../assets/img/jetPack.mp4";

const items = [
  {
    style: { width: "auto", height: "25em" },
    src: require("assets/img/ProTracking.webp"),
    altText: "Protracker",
    caption: "protracker",
    load: "lazy",
  },
  {
    style: { width: "auto", height: "25em" },
    src: require("assets/img/me.webp"),
    altText: "Me",
    caption: "Feel good Look Good Be Good!",
    load: "lazy",
  },
  {
    style: { width: "auto", height: "25em" },
    src: require("assets/img/charts.webp"),
    altText: "Data visulization",
    caption: "Date Visulization",
    load: "lazy",
  },
  {
    style: { width: "auto", height: "25em" },
    src: require("assets/img/reducer.webp"),
    altText: "Reducer",
    caption: "Reducer",
    load: "lazy",
  },
  {
    style: { width: "auto", height: "25em" },
    src: require("assets/img/ssMenu.webp"),
    altText: "FoodTruck",
    caption: "Food Truck menu",
    load: "lazy",
  },
  {
    style: { width: "auto", height: "25em" },
    src: require("assets/img/rail.webp"),
    altText: "Snowboarding",
    caption: "Snowboarding",
    load: "lazy",
  },
  {
    style: { width: "auto", height: "25em" },
    src: brewing,
    altText: "Brewing",
    caption: "Brewing",
    load: "lazy",
    type: "video",
  },
  {
    style: { width: "auto", height: "25em" },
    src: require("assets/img/bshaw.webp"),
    altText: "Bradshaw",
    caption: "Bradshaw",
    load: "lazy",
  },
  {
    style: { width: "auto", height: "25em" },
    src: require("assets/img/flinstone.webp"),
    altText: "Flinstone",
    caption: "Flinstone",
    load: "lazy",
  },
  {
    style: { width: "auto", height: "25em" },
    src: jetpack,
    altText: "flying",
    caption: "More good Times",
    load: "lazy",
    type: "video",
  },
  {
    style: { width: "auto", height: "25em" },
    src: require("assets/img/medium.webp"),
    altText: "medium",
    caption: "More food love",
    load: "lazy",
  },
];

function SectionCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  // Helper function to calculate the next index
  const calculateNextIndex = useCallback(
    (currentIndex, offset) =>
      (currentIndex + offset + items.length) % items.length,
    []
  );

  const changeIndex = useCallback(
    (newIndex) => {
      if (!animating) {
        setActiveIndex(newIndex);
      }
    },
    [animating]
  );

  const next = () => {
    changeIndex(calculateNextIndex(activeIndex, 1));
  };

  const previous = () => {
    changeIndex(calculateNextIndex(activeIndex, -1));
  };

  const goToIndex = (newIndex) => {
    changeIndex(newIndex);
  };

  const onExiting = () => setAnimating(true);
  const onExited = () => setAnimating(false);

  return (
    <React.Fragment>
      <div className="section pt-o" id="carousel">
        <Container>
          <Row className="mx-auto">
            <div className="carousel-title text-center">
              <h1
                style={{
                  marginBottom: ".5em",
                  fontWeight: "bold",
                  color: "white",
                  fontSize: "5em",
                  textShadow: "2px 2px 4px #000000",
                }}
              >
                Passions!
              </h1>
              <h6 className="text-center mb-1">
                <em>
                  I enjoy stand up comedy, action Sports, and the process of
                  creation "brewing cooking and Web Development!"
                </em>
              </h6>
              <p className="text-center mb-1">
                <strong>
                  "Something you might not know by looking at me is I can run
                  really fast"
                </strong>
                <br />
                <span>'Jerry Seinfeld'</span>
                <br />
                <strong>"I think the aliens are already among us."</strong>
                <br />
                <span>'Bill Burr'</span>
              </p>
            </div>
            <Col className="mx-auto" md="6">
              <Card className="page-carousel carousel-container">
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />
                  {items.map((item) => {
                    return (
                      <CarouselItem
                        onExiting={onExiting}
                        onExited={onExited}
                        key={item.src}
                      >
                        {item.type === "video" ? (
                          <video
                            style={{ ...item.style, margin: "auto" }}
                            loading="lazy"
                            loop
                            autoPlay
                            muted
                            playsInline
                          >
                            <source src={item.src} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <img
                            src={item.src}
                            alt={item.altText}
                            style={{ ...item.style, margin: "auto" }}
                            loading="lazy"
                          />
                        )}
                      </CarouselItem>
                    );
                  })}

                  <a
                    className="left carousel-control carousel-control-prev"
                    data-slide="prev"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      previous();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-left" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="right carousel-control carousel-control-next"
                    data-slide="next"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      next();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-right" />
                    <span className="sr-only">Next</span>
                  </a>
                </Carousel>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default SectionCarousel;
