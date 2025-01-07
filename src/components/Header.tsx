import { useState } from "react";
import estilos from "../css/Header.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import {
  faMagnifyingGlass,
  faUser,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  const { t, i18n } = useTranslation(["welcome"]);
  const [isTrueIdioma, setTrueIdioma] = useState(false);

  const handleClick = () => {
    setTrueIdioma(!isTrueIdioma);
  };
  function changeLanguage(idioma: string) {
    i18n.changeLanguage(idioma);
    setTrueIdioma(!isTrueIdioma);
  }
  return (
    <nav className={estilos.nav}>
      <div id={estilos.searcher}>
        <a href="" id={estilos.lupa}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </a>
        <input
          id={estilos.search_box}
          type="search"
          placeholder={t("inputText")}
        />
      </div>

      <a href="" id={estilos.logo}>
        <img src="/testimonios_freecodecamp/logo.png" alt="" />
      </a>

      <div className={estilos.buttons}>
        <button
          className={`${estilos.btn} ${estilos.btn_globo}`}
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faGlobe} />
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
            <button onClick={() => changeLanguage("en")}>{t("btn_1")}</button>
          </li>
          <li>
            <button onClick={() => changeLanguage("es")}>{t("btn_2")}</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
