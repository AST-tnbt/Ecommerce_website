import { useState } from "react";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import "./Products.css";
import data from "../../assets/data/data";
import { Link } from "react-router-dom";

export default function Products() {
  const [searchQuery, setSearchQuery] = useState("");
  function scrollToTop() {
    window.scrollTo(0, 0);
  }
  function handleSearchChange(event) {
    setSearchQuery(event.target.value);
  }
  const filteredProducts = data.listProduct.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Header />
      <SearchBar onChangeSearch={handleSearchChange} />
      <div className="product-list">
        {filteredProducts.length === 0 ? (
          <h1 className="not-found-product">Không tìm thấy sản phẩm</h1>
        ) : (
          filteredProducts.map((product) => {
            return (
              <div className="product-item" key={product.id}>
                <Link
                  onClick={() => scrollToTop()}
                  to={`/productinfo/${product.id}`}
                >
                  <div
                    className="product-img"
                    style={{ backgroundImage: `url(${product.img})` }}
                  ></div>
                  <span className="product-title">{product.title}</span>
                  <span className="product-price">{product.price}</span>
                </Link>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}
