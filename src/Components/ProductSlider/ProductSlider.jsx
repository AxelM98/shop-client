import React from "react";
import useFetch from "../../useFetch";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./productSlider.scss";
import { Link } from "react-router-dom";

const ProductSlider = () => {
  const { data, loading, error } = useFetch(
    `http://localhost:1112/api/products`
  );
  const settings = {
    className: "carouselSlider",
    dots: true,
    infinite: true,
    speed: 800,
    centerPadding: "10px",
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    focusOnSelect: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 690,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="carousel">
      <h2>Related Products</h2>
      {loading ? (
        "LOADING..."
      ) : (
        <Slider {...settings}>
          {" "}
          {data.map((product) => (
            <Link className="link" to={`/products/find/${product._id}`}>
              <div className="card" key={product._id}>
                <div className="imgWrapper">
                  <img src={product.images[0]} />
                </div>
                <div className="infoWrapper">
                  <h3>{product.title}</h3>
                  <p>${product.price}</p>
                  <button>Add to cart</button>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default ProductSlider;
