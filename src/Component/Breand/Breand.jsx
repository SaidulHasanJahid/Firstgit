import Slider from "react-slick";
import './Breand.css';
import honda from './image/famous-brand-logo-Hyundai.png'
function Breand() {
  const settings = {

    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    Breand: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 1000,
    BreandSpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={honda} alt="" className="image" />
        </div>
        <div>
        <img src={honda} alt="" className="image" />
        </div>
        <div>
        <img src={honda} alt="" className="image" />
        </div>
        <div>
        <img src={honda} alt="" className="image" />
        </div>
        <div>
        <img src={honda} alt="" className="image" />
        </div>
        <div>
        <img src={honda} alt="" className="image" />
        </div>
        <div>
        <img src={honda} alt="" className="image" />
        </div>
        <div>
        <img src={honda} alt="" className="image" />
        </div>
        <div>
        <img src={honda} alt="" className="image" />
        </div>
      </Slider>
    </div>
  );
}

export default Breand;