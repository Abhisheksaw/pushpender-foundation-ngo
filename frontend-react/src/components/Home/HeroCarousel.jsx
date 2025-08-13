import React, { useEffect, useState, useRef } from "react";

export default function HeroCarousel() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoPlayRef = useRef(null);

  useEffect(() => {
    fetch("/carouselData.json")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.error("Failed to load carousel data:", err));
  }, []);

  useEffect(() => {
    if (images.length === 0) return;

    startAutoPlay();

    return () => clearInterval(autoPlayRef.current);
  }, [images]);

  const startAutoPlay = () => {
    clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
  };

  const resetAutoPlay = () => {
    startAutoPlay();
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    resetAutoPlay();
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    resetAutoPlay();
  };

  if (images.length === 0) return <div>Loading...</div>;

  return (
    <section className="hero">
      <div
        className="carousel-container"
        onMouseEnter={() => clearInterval(autoPlayRef.current)}
        onMouseLeave={resetAutoPlay}
      >
        <div
          className="carousel-slide"
          style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
        >
          {images.map((item, idx) => (
            <img
              key={idx}
              src={item.image}
              alt={`Slide ${idx + 1}`}
              style={{ cursor: "pointer" }}
              onClick={() => window.open(item.path, "_blank")}
              draggable={false}
            />
          ))}
        </div>
        <button
          className="arrow arrow-left"
          aria-label="Previous"
          onClick={goPrev}
        >
          &#10094;
        </button>
        <button
          className="arrow arrow-right"
          aria-label="Next"
          onClick={goNext}
        >
          &#10095;
        </button>
      </div>
    </section>
  );
}
