import React, { useEffect, useState } from "react";
import "./cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../../Redux/cartReducer";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  };

  const [stripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    setStripeToken(token);
  };

  const publicRequest = axios.create({
    baseURL: "http://localhost:1112/api/",
  });

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await publicRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: totalPrice() * 100,
        });
        console.log(res.data);
        navigate("/success");
      } catch (err) {
        console.log(err);
        //navigate("/failure")
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, products, navigate]);

  console.log(products);

  return (
    <div className="cart">
      <h1>Products in your Cart</h1>
      {products.map((item) => (
        <div className="item" key={item.id}>
          {item?.img && item.img.length > 0 && <img src={item?.img} />}
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">
              {item.quantity} x ${item.price}
            </div>
          </div>
          <DeleteOutlinedIcon
            className="delete"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <StripeCheckout
        name="Store"
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Augustus_Bevilacqua_Glyptothek_Munich_317.jpg/1200px-Augustus_Bevilacqua_Glyptothek_Munich_317.jpg"
        billingAddress
        shippingAddress
        description={`Your total is $${totalPrice()}`}
        amount={totalPrice() * 100}
        token={onToken}
        stripeKey="pk_test_51MVXNjAThCOCB24CqCJxYKLPwTjw04s10UgG1i7J9X6RxWnK4pYGlFmtKAgmPrAwPNgDQYEaR0ux3qPgBCs33XJK006oBHyG3F"
      >
        <button>PROCEED TO CHECKOUT</button>
      </StripeCheckout>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;
