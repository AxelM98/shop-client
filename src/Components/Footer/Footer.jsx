import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <div className="top">
        <div className="items">
          <h1>Categories</h1>
          <span>Woman</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="items">
          <h1>Links</h1>
          <span>Woman</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="items">
          <h1>About</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            ea accusamus aliquid modi error repudiandae delectus asperiores odit
            iste ipsam, velit saepe numquam reprehenderit molestias tempora aut
            hic! Quisquam nemo alias debitis voluptatem iure et suscipit, quos
            quo amet illo.
          </p>
        </div>
        <div className="items">
          <h1>Contact</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            ea accusamus aliquid modi error repudiandae delectus asperiores odit
            iste ipsam, velit saepe numquam reprehenderit molestias tempora aut
            hic! Quisquam nemo alias debitis voluptatem iure et suscipit, quos
            quo amet illo.
          </p>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Store</span>
          <span className="copyright">
            © Copyright 2023. All rights reserved
          </span>
        </div>
        <div className="right">
          <img
            src="https://support.mywifinetworks.com/hc/article_attachments/360055906133/5e1cce2c96d1d.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
