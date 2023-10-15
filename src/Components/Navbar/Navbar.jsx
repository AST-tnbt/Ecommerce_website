import { BsFillCartFill } from "react-icons/bs";
import { BiSolidUser } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import "./Navbar.css";
import Login from "../Login/Login";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";

export default function Navbar({ productInCart, setProductInCart }) {
  let [showLogin, setShowLogin] = useState(false);
  let [showCart, setShowCart] = useState(false);
  let [logoText, setLogoText] = useState("SHOPPING ONLINE");
  function scrollToTop() {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 550 && window.innerWidth >= 350)
        setLogoText("LOGO");
      else setLogoText("SHOPPING ONLINE");
    }
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      <nav className="navigation">
        <Link to="/" onClick={() => scrollToTop()}>
          <div className="logo">{logoText}</div>
        </Link>
        <div className="right-nav">
          <div className="user-icon" onClick={() => setShowLogin(true)}>
            <BiSolidUser size={32} fill="white" />
          </div>
          <Link to="/specialproducts" onClick={() => scrollToTop()}>
            <div className="like-icon">
              <AiFillHeart size={32} fill="white" />
            </div>
          </Link>
          <div className="cart-icon" onClick={() => setShowCart(true)}>
            <BsFillCartFill size={32} fill="white" />
          </div>
        </div>
      </nav>
      <Login showLogin={showLogin} setShowLogin={setShowLogin} />
      <Cart
        productInCart={productInCart}
        setProductInCart={setProductInCart}
        showCart={showCart}
        setShowCart={setShowCart}
      />
    </div>
  );
}
