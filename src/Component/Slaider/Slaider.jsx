import './Slaider.css';
import Slider from "react-slick";
import ima from './s1.webp'
export default function SlickSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <Slider {...settings} className="slaider">
      <div>
        <img src={ima} alt="" className="ima" />
      </div>
      <div>
      <img src={ima} alt="" className="ima" />
      </div>
      <div>
      <img src={ima} alt="" className="ima" />
      </div>
      <div>
      <img src={ima} alt="" className="ima" />
      </div>
      <div>
      <img src={ima} alt="" className="ima" />
      </div>
      <div>
      <img src={ima} alt="" className="ima" />
      </div>
    </Slider>
  );
}