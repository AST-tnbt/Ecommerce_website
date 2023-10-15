import { useState, useEffect } from "react";
import "./Cart.css";
import { AiOutlineClose } from "react-icons/ai";

export default function Cart({
  productInCart,
  setProductInCart,
  showCart,
  setShowCart,
}) {
  let [totalCost, setTotalCost] = useState(0);
  let [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    if (firstRender) setFirstRender(false);
    if (firstRender === false) {
      calculateTotalPrice();
      setShowCart(true);
    }
  }, [productInCart]);

  function calculateTotalPrice() {
    let totalPrice = 0;
    productInCart.forEach((element) => {
      totalPrice += element.value;
    });
    setTotalCost(totalPrice.toLocaleString("vi-VN"));
  }
  function handleDel(index) {
    let updateCart = productInCart.filter((_, i) => i !== index);
    setProductInCart(updateCart);
  }

  return (
    <>
      <div
        className="overlay"
        style={{ display: showCart ? "block" : "none" }}
        onClick={() => setShowCart(false)}
      ></div>
      <div className={showCart ? "cart-box show-cart" : "cart-box"}>
        <AiOutlineClose
          className="close-icon"
          size={26}
          onClick={() => setShowCart(false)}
        />
        <h3 className="title-cart">GIỎ HÀNG</h3>
        {productInCart.length === 0 ? (
          <div className="list-product-cart">
            <p className="not-found-cart">
              Bạn chưa có sản phẩm nào trong giỏ hàng.
            </p>
          </div>
        ) : (
          <>
            <div className="list-product-cart">
              {productInCart.map((product, index) => (
                <div className="list-product-cart-item" key={index}>
                  <div
                    className="product-thumbnail"
                    style={{ backgroundImage: `url(${product.img})` }}
                  ></div>
                  <div className="product-infor">
                    <div className="product-info__title">{product.title}</div>
                    <div className="product-info__price">{product.price}</div>
                    <button
                      className="del-btn"
                      onClick={() => handleDel(index)}
                    >
                      Xoá
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="total-price-box">
              <h2 className="total-price">Tổng giá: {totalCost} VNĐ</h2>
              <button className="buy-btn">Mua hàng</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
