
import Slider from "react-slick";
import './carruse.css'
export default function Carrusel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="carrusel-container">
        <img src="/img/carrusel/image1.png" alt="valorant" />
      </div>
      <div>
        <img src="/img/carrusel/image2.jpg" alt="valorant" />
      </div>
      <div>
        <img src="/img/carrusel/image3.jpg" alt="valorant" />
      </div>
      <div>
        <img src="/img/carrusel/image4.jpeg" alt="valorant" />
      </div>
      <div>
        <img src="/img/carrusel/image5.webp" alt="valorant" />
      </div>
      <div>
        <img src="/img/carrusel/image6.jpg" alt="valorant" />
      </div>
    </Slider>
  );
}
