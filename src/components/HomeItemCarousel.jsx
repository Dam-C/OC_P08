import { useState } from "react";
import "../styles/carousel.css";

const HomeItemCarousel = ({ images }) => {
  const [index, setIndex] = useState(0);
  const { length } = images;

  const handleNav = (change) => {
    const newIndex = index + change;
    if (newIndex < 0) {
      setIndex(length - 1);
    } else if (newIndex >= length) {
      setIndex(0);
    } else {
      setIndex(newIndex);
    }
  };

  if (images.length === 1) {
    return (
      <article className="carousel__block">
        <div className="carousel-img-container">
          <img src={images[0]} className="carousel-img" />
        </div>
      </article>
    );
  } else {
    return (
      <article className="carousel__block">
        <div className="carousel-img-container">
          <img src={images[index]} className="carousel-img" />
        </div>
        <div className="arrow-block__left">
          <i
            onClick={() => handleNav(-1)}
            id="left"
            className="arrow arrow__left"
          ></i>
        </div>
        <div className="arrow-block__right">
          <i
            onClick={() => handleNav(1)}
            id="right"
            className="arrow arrow__right"
          ></i>
        </div>

        <div className="carousel__img-number">
          {index + 1}/{length}
        </div>
      </article>
    );
  }
};

export default HomeItemCarousel;
