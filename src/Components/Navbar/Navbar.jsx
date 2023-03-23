import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import "./navbar.scss";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import useFetch from "./../../useFetch";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const products = useSelector((state) => state.cart.products);

  const { data, error, loadning } = useFetch(
    "http://localhost:1112/api/products"
  );

  return (
    <div className="navbar">
      <div className="top">
        <div className="left">
          <div className="item imageContainer">
            <img
              src="https://cdn.britannica.com/25/4825-004-F1975B92/Flag-United-Kingdom.jpg"
              alt=""
              className="image"
            />
          </div>
          <div className="item language">
            <span>English</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item currency">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            Store
          </Link>
        </div>
        <div className="right">
          {!searchOpen && (
            <div className="icons">
              <div
                className="icon searchIcon"
                onClick={() => setSearchOpen(!searchOpen)}
              >
                <SearchIcon />
              </div>
              <Link className="icon link" to="/">
                <HomeOutlinedIcon />
              </Link>
              <div className="icon">
                <PersonOutlineOutlinedIcon />
              </div>
              <div className="icon">
                <FavoriteBorderOutlinedIcon />
              </div>
              <div className="icon cartIcon" onClick={() => setOpen(!open)}>
                <ShoppingCartOutlinedIcon />
                <span>{products.length}</span>
              </div>
            </div>
          )}
          {searchOpen && (
            <div className="inputContainer">
              <div className="close" onClick={() => setSearchOpen(!searchOpen)}>
                <CloseIcon />
              </div>
              <div className="input">
                <input
                  type="text"
                  placeholder="Find Product..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <SearchIcon className="search" />
              </div>
            </div>
          )}
          {searchTerm && (
            <div className="searchResults">
              {data
                .filter((product) =>
                  product.title.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((product) => (
                  <div key={product._id} className="searchResult">
                    <Link
                      className="link"
                      onClick={() => {
                        setSearchTerm("");
                        setSearchOpen(false);
                      }}
                      to={`/products/find/${product._id}`}
                    >
                      <div className="item" key={product._id}>
                        {product?.images && product.images.length > 0 && (
                          <img src={product?.images[0]} />
                        )}
                        <div className="details">
                          <h1>{product.title}</h1>
                          <p>{product.desc?.substring(0, 100)}</p>
                          <div className="price">${product.price}</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <Link className="link" to="/products">
            All Products
          </Link>
        </div>
        <div className="item">
          <Link className="link" to="/products/men">
            Men
          </Link>
        </div>
        <div className="item">
          <Link className="link" to="/products/women">
            Women
          </Link>
        </div>
        <div className="item">
          <Link className="link" to="/products/1">
            Inspiration
          </Link>
        </div>
        <div className="item">
          <Link className="link" to="/products/1">
            Stores
          </Link>
        </div>
        <div className="item">
          <Link className="link" to="/products/1">
            About
          </Link>
        </div>
        <div className="item">
          <Link className="link" to="/products/1">
            Contact
          </Link>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
