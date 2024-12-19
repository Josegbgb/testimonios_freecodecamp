import { useState } from "react";
import estilos from "../css/Header.module.css";
import { MouseEvent } from "react";

function Header() {
  const width = {
    width: "60px",
  };
  const [isTrueIdioma, setTrueIdioma] = useState(false);
  const [isTrueMenu, setTrueMenu] = useState(false);

  const handleClick = (_event: MouseEvent, buttonName: string) => {
    if (buttonName === "menu") {
      if (isTrueIdioma === true) {
        setTrueIdioma(!isTrueIdioma);
      }
      setTrueMenu(!isTrueMenu);
    } else {
      if (isTrueMenu === true) {
        setTrueMenu(!isTrueMenu);
      }
      setTrueIdioma(!isTrueIdioma);
    }
  };
  return (
    <nav className={estilos.nav}>
      <div id={estilos.searcher}>
        <a href="" id={estilos.lupa}>
          <img src={`${process.env.PUBLIC_URL}/lupa.png`} alt="" />
        </a>
        <input
          id={estilos.search_box}
          type="search"
          placeholder="Search 10,700 + Tutorials"
        />
        <a href="" id={estilos.logo}>
          <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="" />
        </a>
      </div>

      <div className={estilos.buttons}>
        <button
          className={estilos.btn}
          onClick={(e) => handleClick(e, "idioma")}
        >
          <img src={`${process.env.PUBLIC_URL}/idioma.png`} alt="" />
        </button>
        <button
          className={estilos.btn}
          style={width}
          onClick={(e) => handleClick(e, "menu")}
        >
          <p>Menu</p>
        </button>
        <button className={estilos.btn}>
          <img src={`${process.env.PUBLIC_URL}/avatar.png`} alt="" />
        </button>
        <ul
          className={`${
            isTrueIdioma ? estilos.list_conta : estilos.list_container
          } `}
        >
          <li>
            <button>English</button>
          </li>
          <li>
            <button>Español</button>
          </li>
          <li>
            <button>Italiano</button>
          </li>
          <li>
            <button>Portugues</button>
          </li>
          <li>
            <button>Deutsch</button>
          </li>
        </ul>

        <ul
          className={`${
            isTrueMenu ? estilos.list_conta : estilos.list_container
          }`}
        >
          <li>
            <button>Donate</button>
          </li>
          <li>
            <button>Curriculum</button>
          </li>
          <li>
            <button>Profile</button>
          </li>
          <li>
            <button>Settings</button>
          </li>
          <li>
            <button>Forum</button>
          </li>
          <li></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
