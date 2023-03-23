import React, { useEffect } from "react";
import { useState } from "react";
import "./product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/cartReducer";
import useFetch from "./../../useFetch";
import ProductSlider from "../../Components/ProductSlider/ProductSlider";

const Product = () => {
  const { id } = useParams();
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");

  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(
    `http://localhost:1112/api/products/find/${id}`
  );

  console.log(data);
  return (
    <>
      <div className="product">
        {loading ? (
          "LOADING..."
        ) : (
          <>
            <div className="left">
              <div className="images">
                {data?.images && data.images.length > 0 && (
                  <>
                    <img
                      src={data?.images[0]}
                      onClick={(e) => setSelectedImg(0)}
                    />
                    <img
                      src={data?.images[1]}
                      onClick={(e) => setSelectedImg(1)}
                    />
                  </>
                )}
              </div>
              <div className="mainImg">
                {data?.images && data.images.length > 0 && (
                  <img src={data?.images[selectedImg]} />
                )}
              </div>
            </div>
            <div className="right">
              <h1>{data?.title}</h1>
              <span className="price">${data?.price}</span>
              <p>{data?.desc}</p>
              <div className="sizeContainer">
                <span>Select Size:</span>
                <select onChange={(e) => setSize(e.target.value)}>
                  {data?.size &&
                    data.size.length > 0 &&
                    data?.size.map((s) => <option value={s}>{s}</option>)}
                </select>
              </div>
              <div className="quantity">
                <button
                  onClick={() =>
                    setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                  }
                >
                  -
                </button>
                {quantity}
                <button onClick={() => setQuantity((prev) => prev + 1)}>
                  +
                </button>
              </div>
              <button
                className="add"
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: data._id,
                      title: data.title,
                      desc: data.desc,
                      price: data.price,
                      img: data.images[0],
                      quantity,
                      size,
                    })
                  )
                }
              >
                <AddShoppingCartIcon /> ADD TO CART
              </button>
              <div className="links">
                <div className="item">
                  <FavoriteBorderIcon /> ADD TO WHISHLIST
                </div>
                <div className="item">
                  <BalanceIcon /> ADD TO COMPARE
                </div>
              </div>
              <div className="info">
                <span>Vendor: Polo</span>
                <span style={{ textTransform: "capitalize" }}>
                  Product Type: {data?.title}
                </span>
                <span>Tag: {data?.category}</span>
              </div>
              <hr />
              <div className="additionalInfo">
                <div className="details">
                  <div className="addDesc">
                    <h3>DESCRIPTION</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Molestiae, illo dolorum esse veniam id omnis pariatur
                      recusandae placeat fugit excepturi. Molestiae, sint
                      corrupti ipsam illo architecto quo ratione, ut, quisquam
                      nam atque corporis. In asperiores ipsa ea blanditiis
                    </p>
                  </div>
                  <hr />
                  <div className="addInfo">
                    <h3>ADDITIONAL INFORMATION</h3>
                    <ul>
                      <li>Fitted Body - Regular fit</li>
                      <li>Semi cut away collar</li>
                      <li>Simple cuff</li>
                      <li>100% Linen</li>
                      <li>Beige mother-of-pearl buttons</li>
                    </ul>
                  </div>
                </div>
                <hr />
                <div className="reviewShipping">
                  <div className="review">
                    <h3>REVIEWS</h3>
                    <div className="reviewWrapper">
                      <div className="rating">
                        <span className="stars">★★★★★</span>
                        <span className="total">(5 reviews)</span>
                      </div>
                      <div className="reviewInput">
                        <textarea placeholder="Write a review"></textarea>
                        <button>Submit</button>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="shipping">
                    <h3>SHIPPING & RETURN</h3>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Sapiente non eaque quaerat voluptatibus voluptas ut
                    </p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </>
        )}
      </div>
      <ProductSlider />
    </>
  );
};

export default Product;
