import React from "react";
import { useGlobalContext } from "./context";
import { FaCartPlus } from "react-icons/fa";

const Navbar = () => {
  const { amount } = useGlobalContext();

  return (
    <nav>
      <div className="nav-center">
        <h3>React Cart</h3>
        <div className="nav-container">
          <FaCartPlus className="cart-icon" />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
