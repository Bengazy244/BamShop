import { PRODUCTS } from "../../products";
import { Product } from "./product";

import "./shop.css";
import "../../App.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="container">
        <div className="searchbar">
          <input
            type="text"
            name="search"
            className="search"
            placeholder="Search products..."
          />
        </div>

        <div className="products">
          {" "}
          {PRODUCTS.map((product, index) => (
            <Product data={product} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
