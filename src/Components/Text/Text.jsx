import React from "react";
import { Link } from "react-router-dom";
import "./text.scss";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Text = () => {
  return (
    <div className="text">
      <div className="top">
        <h1 data-aos="fade-in" data-aos-duration="1000">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque,
          nesciunt.
        </h1>
        <h2 data-aos="fade-in" data-aos-duration="1000" data-aos-delay="50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          tempora ipsa ut iure, architecto id accusantium, ipsam sequi nesciunt
          eum dolores inventore nihil dolore facilis fugiat doloribus molestias
          non laboriosam odio maxime dicta repudiandae corporis pariatur.
          Pariatur ratione numquam tempora, accusantium, obcaecati debitis
          repudiandae itaque placeat doloribus omnis vero commodi.
        </h2>
      </div>
      <div className="bottom">
        <div className="img">
          <img
            src="https://images.pexels.com/photos/1381544/pexels-photo-1381544.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button className="btn">
            <Link className="link" to="/products/1">
              Inspiration
            </Link>
          </button>
        </div>
        <div className="img">
          <img
            src="https://images.pexels.com/photos/1189675/pexels-photo-1189675.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              About
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Text;
