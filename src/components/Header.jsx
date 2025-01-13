import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContaxt } from "../context/ShopContext";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart, FaSearch, FaHeart } from "react-icons/fa"; // Importing icons
import logo from "../assets/images/icons/logo-01.png";

const Header = ({ toggleCart }) => {
  const { setShowSearch, navigate } = useContext(ShopContaxt);
  const { getCartCount } = useContext(CartContext);

  const handleSearchClick = () => {
    setShowSearch(true);
    navigate("/shop");
  };

  return (
    <header>
      <div className="container-menu-desktop">
        <div className="top-bar">
          <div className="content-topbar flex-sb-m h-full container">
            <div className="left-top-bar">
              Free shipping for standard order over $100
            </div>

            <div className="right-top-bar flex-w h-full">
              <a href="#" className="flex-c-m trans-04 p-lr-25">
                Help & FAQs
              </a>

              <a href="#" className="flex-c-m trans-04 p-lr-25">
                My Account
              </a>

              <a href="#" className="flex-c-m trans-04 p-lr-25">
                EN
              </a>

              <a href="#" className="flex-c-m trans-04 p-lr-25">
                USD
              </a>
            </div>
          </div>
        </div>

        <div className="wrap-menu-desktop">
          <nav className="limiter-menu-desktop container">
            <a href="#" className="logo">
              <img src={logo} alt="IMG-LOGO" />
            </a>

            <div className="menu-desktop">
              <ul className="main-menu">
                <li className="active-menu">
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to="/shop">Shop</Link>
                </li>

                <li className="label1" data-label1="hot">
                  <Link to="/feature">Features</Link>
                </li>

                <li>
                  <Link to="/blog">Blog</Link>
                </li>

                <li>
                  <Link to="/about">About</Link>
                </li>

                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="wrap-icon-header flex-w flex-r-m">
              <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11">
                <FaSearch size={20} onClick={handleSearchClick} />
              </div>

              <Link to="/feature">
                <div
                  className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart"
                  data-notify={getCartCount()}
                  onClick={toggleCart}
                >
                  <FaShoppingCart size={20} />
                </div>
              </Link>

              <a
                href="#"
                className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti"
                data-notify="0"
              >
                <FaHeart size={20} />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
