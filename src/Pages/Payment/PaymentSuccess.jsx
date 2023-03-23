import React from "react";
import "./success.scss";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const PaymentSuccess = () => {
  const products = useSelector((state) => state.cart.products);
  const location = useLocation();

  return (
    <div className="success">
      <div className="wrapper">
        <CheckCircleIcon className="check" />
        <span className="paymentSuccessful">Payment Successful!</span>
        <hr />
        <div className="details">
          <span>Order Id:</span> 123456789123456789
        </div>
        <div className="details">
          <span>Amount:</span> $199
        </div>
        <div className="details">
          <span>Date & Time:</span> April 29 2023 11:00
        </div>
        <div className="details">
          <span>Card:</span> **** **** **** 1234
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
