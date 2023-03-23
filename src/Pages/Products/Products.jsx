import React, { useEffect } from "react";
import { useState } from "react";
import useFetch from "./../../useFetch";
import "./products.scss";
import List from "./../../Components/List/List";

const Products = ({ type }) => {
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState("asc");
  const [onlyMenProducts, setOnlyMenProducts] = useState([]);

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const { data, error, loading } = useFetch(
    `http://localhost:1112/api/products`
  );

  useEffect(() => {
    if (loading) {
      return <span>Loading...</span>;
    }

    if (error) {
      return <span>Error: {error}</span>;
    }

    let productsToFilter = data;
    if (type === "men") {
      productsToFilter = data.filter((product) => product.isMen === true);
    } else if (type === "women") {
      productsToFilter = data.filter((product) => product.isMen === false);
    }

    const allCategories = [
      ...new Set(productsToFilter.map((item) => item.category)),
    ];
    setCategories(["All", ...allCategories]);

    setOnlyMenProducts(productsToFilter);
  }, [data, type]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? onlyMenProducts
      : onlyMenProducts.filter(
          (product) => product.category === selectedCategory
        );

  if (sort === "asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  const priceFilteredProducts = filteredProducts.filter(
    (product) => product.price <= maxPrice
  );

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Categories</h2>
          <ul>
            {categories.map((category, i) => (
              <li key={i}>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedCategory === category}
                    onChange={() => handleCategorySelect(category)}
                  />
                  {category}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="filterItem">
          <h2>Filter by Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by Price</h2>
          <div className="inputItemSort">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Lowest First</label>
          </div>
          <div className="inputItemSort">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Highest First</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://images.pexels.com/photos/10319784/pexels-photo-10319784.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <List product={priceFilteredProducts} />;
      </div>
    </div>
  );
};

export default Products;
