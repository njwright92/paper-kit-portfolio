/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import Image from "next/image";
import { Container, Row, Col } from "reactstrap";
import "../../assets/css/SectionLogin.css";

const items = [
  { src: "/ProTracking.webp", altText: "Protracker", caption: "protracker" },
  { src: "/me.webp", altText: "Me", caption: "Feel good Look Good Be Good!" },
  {
    src: "/charts.webp",
    altText: "Data visulization",
    caption: "Date Visulization",
  },
  { src: "/reducer.webp", altText: "Reducer", caption: "Reducer" },
  { src: "/ssMenu.webp", altText: "FoodTruck", caption: "Food Truck menu" },
  { src: "/rail.webp", altText: "Snowboarding", caption: "Snowboarding" },
  {
    src: "/brewing.mp4",
    altText: "Brewing",
    caption: "Brewing",
    type: "video",
  },
  { src: "/bshaw.webp", altText: "Bradshaw", caption: "Bradshaw" },
  { src: "/flinstone.webp", altText: "Flinstone", caption: "Flinstone" },
  {
    src: "/jetPack.mp4",
    altText: "flying",
    caption: "More good Times",
    type: "video",
  },
  { src: "/medium.webp", altText: "medium", caption: "More food love" },
];

function SectionCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % items.length);
  const previous = () =>
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);

  const item = items[activeIndex];

  return (
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
                creation &apos;brewing cooking and Web Development!&apos;
              </em>
            </h6>
            <p className="text-center mb-1">
              <strong>
                &apos;Something you might not know by looking at me is I can run
                really fast&apos;
              </strong>
              <br />
              <span>Jerry Seinfeld</span>
              <br />
              <strong>I think the aliens are already among us.</strong>
              <br />
              <span>Bill Burr</span>
            </p>
          </div>
          <Col className="mx-auto" md="6">
            <div
              style={{
                position: "relative",
                background: "#000",
                borderRadius: "12px",
                overflow: "hidden",
                minHeight: "25em",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {item.type === "video" ? (
                <video
                  key={item.src}
                  style={{ width: "auto", height: "25em", margin: "auto" }}
                  loop
                  autoPlay
                  muted
                  playsInline
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              ) : (
                <Image
                  key={item.src}
                  src={item.src}
                  alt={item.altText}
                  style={{ width: "auto", height: "25em", margin: "auto" }}
                  loading="lazy"
                />
              )}

              <button
                onClick={previous}
                style={{
                  position: "absolute",
                  left: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(255,255,255,0.8)",
                  border: "none",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  cursor: "pointer",
                  fontSize: "20px",
                }}
              >
                ‹
              </button>
              <button
                onClick={next}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(255,255,255,0.8)",
                  border: "none",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  cursor: "pointer",
                  fontSize: "20px",
                }}
              >
                ›
              </button>

              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex",
                  gap: "8px",
                }}
              >
                {items.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      border: "none",
                      background:
                        idx === activeIndex ? "#fff" : "rgba(255,255,255,0.5)",
                      cursor: "pointer",
                    }}
                  />
                ))}
              </div>
            </div>
            <p className="text-center mt-2" style={{ color: "#fff" }}>
              {item.caption}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SectionCarousel;
