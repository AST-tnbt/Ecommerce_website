import "./SearchBar.css";
import { BsSearch } from "react-icons/bs";
export default function SearchBar({ onChangeSearch }) {
  return (
    <div className="search-box">
      <input
        type="text"
        className="search-bar"
        id="inputSearch"
        placeholder="Tìm kiếm sản phẩm"
        onChange={onChangeSearch}
      />
      <BsSearch size={24} className="search-icon" />
    </div>
  );
}
