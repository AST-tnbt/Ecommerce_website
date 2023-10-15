import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Header.css";
import Slider from "react-slick";
export default function Header() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  return (
    <>
      <div className="banner">
        <Slider {...settings}>
          <div className="banner1"></div>
          <div className="banner2"></div>
        </Slider>
      </div>
    </>
  );
}
