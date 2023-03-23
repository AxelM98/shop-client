import React from "react";
import useFetch from "../../useFetch";
import Card from "../Card/Card";
import "./featuredProducts.scss";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const FeaturedProducts = () => {
  const { data, loading, error } = useFetch(
    `http://localhost:1112/api/products`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1 data-aos="fade-right" data-aos-duration="1000">
          Featured
        </h1>
        <p data-aos="fade-left" data-aos-duration="1000">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum earum
          nostrum quae sed pariatur quo dolorum nemo ut? Velit minima,
          obcaecati, iste, quae numquam architecto debitis a quibusdam eveniet
          non tenetur quos reprehenderit error aperiam! Soluta dolorem debitis
          at id beatae. Perspiciatis harum autem voluptatem dolor error
          voluptates ex ea!
        </p>
      </div>
      <div className="bottom">
        {error
          ? "SOMETHING WENT WRONG"
          : loading
          ? "LOADING..."
          : data?.slice(0, 4).map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
