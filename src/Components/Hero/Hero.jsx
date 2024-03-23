import Carrusel from "../Carrusel/Carrusel";
import "./Hero.css";

export const Hero = () => {
  return (
    <header className="hero-container">
      <div className="half-width">
        <Carrusel />
      </div>
      <div className="half-width">
        <img src="" alt="" />
        <p>Ethos</p>
        <button>Valorant</button>
      </div>
    </header>
  );
};
