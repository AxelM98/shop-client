import React from "react";
import Card from "../Card/Card";
import "./list.scss";

const List = ({ product }) => {
  return (
    <div className="list">
      {product?.map((item) => (
        <Card item={item} key={item._id} />
      ))}
    </div>
  );
};

export default List;
