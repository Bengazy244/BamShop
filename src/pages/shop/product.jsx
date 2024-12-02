/* eslint-disable react/prop-types */

import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "../../App.css";

export const Product = (props) => {
  const { id, productName, description, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];
  return (
    <div className="container">
      <div className="product">
        <img src={productImage} alt="" />
        <div className="description">
          <p>
            <b>{productName}</b>
          </p>
          <p>{description}</p>
          <p>${price}</p>
        </div>
        <button className="addToCartBttn" onClick={() => addToCart(id)}>
          Place order {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
      </div>
    </div>
  );
};
