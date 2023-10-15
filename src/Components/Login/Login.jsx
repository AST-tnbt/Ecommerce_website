import "./Login.css";
import { AiOutlineClose } from "react-icons/ai";
export default function Login({ showLogin, setShowLogin }) {
  return (
    <>
      <div
        className="overlay"
        style={{ display: showLogin ? "block" : "none" }}
        onClick={() => setShowLogin(false)}
      ></div>
      <div className={showLogin ? "login-box show-login" : "login-box"}>
        <AiOutlineClose
          size={26}
          fill="#8d8c8c"
          className="close-icon"
          onClick={() => setShowLogin(false)}
        />
        <form className="login-form">
          <h3 className="login-title">ĐĂNG NHẬP</h3>
          <input className="input-bar" type="text" placeholder="Email" />
          <input className="input-bar" type="text" placeholder="Mật khẩu" />
          <div className="login-help">
            <div className="save-login">
              <input type="checkbox" id="checkbox-login" />
              <label className="text-checkbox" htmlFor="checkbox-login">
                Ghi nhớ đăng nhập
              </label>
            </div>
            <a href="#">Quên mật khẩu?</a>
          </div>
          <button className="btn btn-primary">Đăng nhập</button>
          <button className="btn btn-blue">Đăng nhập Facebook</button>
          <button className="btn btn-red">Đăng nhập Google</button>
        </form>
        <form className="sign-up-form">
          <h3 className="sign-up-title">TẠO TÀI KHOẢN NGAY</h3>
          <button className="btn">Đăng ký</button>
        </form>
      </div>
    </>
  );
}
