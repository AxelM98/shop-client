import React from "react";
import "./card.scss";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link className="link" to={`/products/find/${item._id}`}>
      <div className="card">
        <div className="image">
          {item?.isNew && <span>New Arrival</span>}
          <img src={item?.images[0]} className="mainImg" />
          <img src={item?.images[1]} className="secondImg" />
        </div>
        <h2>{item?.title}</h2>
        <div className="prices">
          <h3>${item?.oldPrice || item?.price + 20}</h3>
          <h3>${item?.price}</h3>
        </div>
        <p>{item?.desc}</p>
      </div>
    </Link>
  );
};

export default Card;
