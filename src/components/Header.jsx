import { Link } from "react-router-dom";
import "../sass/Header.scss";
import Navbar from "./Navbar";
import Select from 'react-select'
import { useContext } from "react";
import DarkModeContext from "../contexts/DarkModeContext";
import FontContext from "../contexts/FontContext";

const Header = () => {
  const {mode, changeMode} = useContext(DarkModeContext)
  const {font, changeFont} = useContext(FontContext)


  const handleMode = (e) => {
    console.log("Entramos")
    console.log(e.target.checked)

    changeMode(e.target.checked? 'dark':'light')
  }


  const handleFont = (e) => {
    changeFont(e.target.value)
  }

  return (
    <header className="main-header">
      <input type="checkbox" id="menu" />
      <Navbar />
      <div className="search-bar">
        <div className={`search-bar__logo-container search-bar__logo-container__${mode}-mode`}>Logo</div>
        <form action="" className="search-bar__form-container">
          <label htmlFor="busqueda" className="search-bar__form-label"></label>
          <input type="search" className="search-bar__form-search" id="busqueda" />
          <input type="submit" value="Buscar" className="search-bar__form-submit" />
        </form>
        <Link className="search-bar__carrito-container" to="/carrito"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg></Link>
        <div className="menu-toggle">
          <label htmlFor="menu" className="menu-toggle__label">
            <span className="menu-toggle__top-bread"></span>
            <span className="menu-toggle__meat"></span>
            <span className="menu-toggle__bottom-bread"></span>
          </label>
        </div>
        <div className="search-bar__dark-mode-container">
          <label htmlFor="search-bar__checkbox-label">Modo oscuro
            <input type="checkbox" id="search-bar__checkbox-label" onChange={handleMode} checked={mode == 'light'? false:true}/>
            <span className="search-bar__checkbox"></span>
          </label>
          
        </div>
        <div className="search-bar__font-container">
          <select name="" id="" className="search-bar__font-container__select" onChange={handleFont}>
            <option value={`prata`}>Fuente</option>
            <option value={`prata`}>Prata</option>
            <option value={`eb`}>EB Garamond</option>
            <option value={`abril`}>Abril Fatface</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
