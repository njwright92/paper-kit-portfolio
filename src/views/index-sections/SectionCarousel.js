import React from "react";
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

const items = [
  {
    style: { width: "auto", height: "25em" },
    src: require("assets/img/proTracker.jpg"),
    altText: "Protracker",
    caption: "protracker",
  },
  {
    style: { width: "auto", height: "25em" },
    src: require("assets/img/me.jpg"),
    altText: "Me",
    caption: "Feel good Look Good Be Good!",
  },
  {
    style: { width: "auto", height: "25em" },
    src: require("assets/img/charts.jpg"),
    altText: "Data visulization",
    caption: "Date Visulization",
  },
  {
    style: { width: "auto", height: "25em" },
    src: require("assets/img/reducer.jpg"),
    altText: "Reducer",
    caption: "Reducer",
  },
  {
    style: { width: "auto", height: "25em" },
    src: require("assets/img/ssMenu.jpg"),
    altText: "FoodTruck",
    caption: "Food Truck menu",
  },
  {
    style: { width: "auto", height: "25em" },
    src: require("assets/img/rail.jpg"),
    altText: "Snowboarding",
    caption: "Snowboarding",
  },
  {
    style: { width: "auto", height: "25em" },
    src: require("assets/img/brewing.gif"),
    altText: "Brewing",
    caption: "Brewing",
  },
  {
    style: { width: "auto", height: "25em" },
    src: require("assets/img/bshaw.jpg"),
    altText: "Bradshaw",
    caption: "Bradshaw",
  },
  {
    style: { width: "auto", height: "25em" },
    src: require("assets/img/flinstone.jpg"),
    altText: "Flinstone",
    caption: "Flinstone",
  },
  {
    style: { width: "auto", height: "25em" },
    src: require("assets/img/jetPack.gif"),
    altText: "flying",
    caption: "More good Times",
  },
  {
    style: { width: "auto", height: "25em" },
    src: require("assets/img/medium.jpg"),
    altText: "medium",
    caption: "More food love",
  },
];

function SectionCarousel() {
  const [state, setState] = React.useState({
    activeIndex: 0,
    animating: false,
  });
  const { activeIndex, animating } = state;

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const setActiveIndex = (nextIndex) => {
    setState((prevState) => ({
      ...prevState,
      activeIndex: nextIndex,
    }));
  };

  const setAnimating = (isAnimating) => {
    setState((prevState) => ({
      ...prevState,
      animating: isAnimating,
    }));
  };
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };

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
                        <img
                          src={item.src}
                          alt={item.altText}
                          style={item.style}
                        />
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
