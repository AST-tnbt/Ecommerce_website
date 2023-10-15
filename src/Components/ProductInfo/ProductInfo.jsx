import { useParams } from "react-router-dom";
import data from "../../assets/data/data";
import "./ProductInfo.css";

export default function ProductInfo({ handleAddToCart }) {
  const { productId } = useParams();
  const product = data.listProduct[productId - 1];

  return (
    <div className="productInfo-page">
      <div className="left-page">
        <div
          className="product-pic"
          style={{ backgroundImage: `url(${product.img})` }}
        ></div>
      </div>
      <div className="right-page">
        <h2 className="productInfo-title">{product.title}</h2>
        <h3 className="productInfo-price">{product.price}</h3>
        <div className="separate-line"></div>
        <p className="productInfo-text">{product.text}</p>
        <button
          className="add-to-cart-btn"
          onClick={() => handleAddToCart(product)}
        >
          Thêm vào giỏ hàng
        </button>
        <button className="buy-btn">Mua ngay</button>
      </div>
    </div>
  );
}
