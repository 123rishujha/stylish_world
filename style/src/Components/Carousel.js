import { useState, useEffect } from "react";
import "./Carousel.css";
import {products} from './Data.js';



function Carousel() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const images = products;


  let timeOut = null;

  const slideLeft = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const slideRight = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    timeOut =
      autoplay &&
      setTimeout(() => {
        slideRight();
      }, 2000);
  });

  return (
    <div
      className="carousel"
      onMouseEnter={() => {
        setAutoplay(false);
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => {
        setAutoplay(true);
      }}
    >
      <div className="carousel_wrapper">
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "carousel_card carousel_card-active"
                  : "carousel_card"
              }
            >
              <img className="card_image" src={image.image} alt={image.title} />
              <div className="card_overlay">
                <h1 className="card_title">{image.title}</h1>
              </div>
            </div>
          );
        })}

        <button onClick={slideLeft} className="carousel_arrow_left">
          &lsaquo;
        </button>
        <button onClick={slideRight} className="carousel_arrow_right">
          &rsaquo;
        </button>

        <div className="carousel_pagination">
          {images.map((_, index) => {
            return (
              <div
                key={index}
                className={
                  index === current
                    ? "pagination_dot pagination_dot-active"
                    : "pagination_dot"
                }
                onClick={() => setCurrent(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
