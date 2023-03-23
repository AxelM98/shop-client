import React from "react";
import Categories from "../../Components/Categories/Categories";
import Slider from "../../Components/Slider/Slider";
import Image from "./../../Components/Image/Image";
import FeaturedProducts from "./../../Components/FeaturedProducts/FeaturedProducts";
import Text from "../../Components/Text/Text";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts />
      <Image />
      <Categories />
      <Text />
    </div>
  );
};

export default Home;
