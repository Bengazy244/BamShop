import { Link } from "react-router-dom";
import { ShoppingCart } from "@phosphor-icons/react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">BamShop </Link>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/checkout">Checkout</Link>
        <Link to="/cart">
          <ShoppingCart size={25} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
