import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/HeroPage.css";

function ImageSlider() {
  return (
    <div
      id="ifixCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      {/* Carousel Indicators */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#ifixCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#ifixCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#ifixCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      {/* Carousel Slides */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="/images/slide1.jpg"
            alt="Slide 1"
            className="carousel-image"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/slide2.jpg"
            alt="Slide 2"
            className="carousel-image"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/slide3.jpg"
            alt="Slide 3"
            className="carousel-image"
          />
        </div>
      </div>

      {/* Carousel Arrows */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#ifixCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#ifixCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default ImageSlider;
