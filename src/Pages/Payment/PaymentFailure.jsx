import React from "react";
import { useLocation } from "react-router-dom";

const PaymentFailure = () => {
  const location = useLocation();
  console.log(location);
  return <div>Failure</div>;
};

export default PaymentFailure;
