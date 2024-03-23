import { Boton } from "../Boton/Boton";
import { Logo } from "../Logo/Logo";
import { Search } from "../Search/Search";

export const Header = () => {
  return (
    <>
      <header className="header">
        <Logo />
        <nav className="menu  panel ">
          <ul className="header__list">
            <div className="seach-container">
              <Search />
            </div>
            <div className="btn__container">
              <Boton text="Login" className="header__btn--register" link="#" />
              <Boton
                text="Registrarse"
                className="header__btn--login"
                link="#"
              />
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
};
