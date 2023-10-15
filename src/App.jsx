import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SpecialProducts from "./SpecialProducts/SpecialProducts";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";
import Footer from "./Components/Footer/Footer";
import ProductInfo from "./Components/ProductInfo/ProductInfo";
import { useState } from "react";
export default function App() {
  let [listProductCart, setListProductCart] = useState([]);
  function handleAddToCart(product) {
    setListProductCart([...listProductCart, product]);
  }
  return (
    <Router>
      <Navbar
        productInCart={listProductCart}
        setProductInCart={setListProductCart}
      />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/specialproducts" element={<SpecialProducts />} />
        <Route
          path="/productinfo/:productId"
          element={<ProductInfo handleAddToCart={handleAddToCart} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}
