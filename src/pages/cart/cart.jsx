import { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import "./cart.css";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product, id) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} key={id} />;
          }
        })}
      </div>
      {/* Checkout Section  */}
      {totalAmount > 0 ? (
        <div className="checkout">
          <p className="subtotal">Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button onClick={() => navigate("/checkout")}> Checkout </button>
        </div>
      ) : (
        <p className="empty-cart"> Your Cart is Empty.Place an order!</p>
      )}
    </div>
  );
};
