import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../../../Assets/logo.png";
import cartimg from "../../../Assets/cart.png";
import userIcon from "../../../Assets/user.png";
import { useNavigate, Link } from "react-router-dom";
import { DataContext } from "../Context/DataContext";
import { MyCartContext } from "../Context/CartContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { current } = useContext(DataContext);
  const { cart } = useContext(MyCartContext);

  const handleProfile = () => {
    if (current) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  const totalItemsInCart = cart.reduce((total, item) => total + item.qty, 0);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Petshop logo" onClick={() => navigate("/")} />
      </div>
      <ul className="navbar-menu">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/shop">SHOP</Link>
        </li>
        <li>
          <Link to="/pets">MY PETS</Link>
        </li>
        <li>
          <Link to="/support">SUPPORT</Link>
        </li>
        <li>
          <a href="#booking">BOOKINGS</a>
        </li>
      </ul>
      <div className="navbar-actions">
        <div className="cart-icon">
          <img src={userIcon} onClick={handleProfile} alt="User profile" />
          {current && <span style={{ fontSize: "20px" }}>{current.name}</span>}
        </div>
        {current && (
          <div className="cart-icon">
            <img
              src={cartimg}
              alt="Cart"
              onClick={() => navigate("/cartpage")}
            />
            {totalItemsInCart > 0 && (
              <span className="cart-count">{totalItemsInCart}</span>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
