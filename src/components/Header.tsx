import { useState } from "react";
import estilos from "../css/Header.module.css";
import { MouseEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

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
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </a>
        <input
          id={estilos.search_box}
          type="search"
          placeholder="Search 10,700 + Tutorials"
        />
      </div>
      <a href="" id={estilos.logo}>
        <img src="/testimonios_freecodecamp/logo.png" alt="" />
      </a>
      <div className={estilos.buttons}>
        <button
          className={`${estilos.btn} ${estilos.btn_globo}`}
          onClick={(e) => handleClick(e, "idioma")}
        >
          <FontAwesomeIcon icon={faGlobe} />
        </button>
        <button
          className={estilos.btn}
          style={width}
          onClick={(e) => handleClick(e, "menu")}
        >
          <p>Menu</p>
        </button>
        <button className={estilos.btn}>
          <FontAwesomeIcon icon={faUser} />
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
