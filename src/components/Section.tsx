import { useTranslation } from "react-i18next";
import estilos from "../css/Section.module.css";

function Section() {
  const { t } = useTranslation(["welcome"]);

  return (
    <section className={estilos.section}>
      <div id={estilos.padding_container}>
        <div id={estilos.container}>
          <h1 className={estilos.titulos}>{t("title")}</h1>
          <h1 className={estilos.titulos}>{t("title2")}</h1>
          <h1 className={estilos.titulos}>{t("title3")}</h1>
          <h1 className={estilos.titulos}>{t("title4")}</h1>
          <button id={estilos.btn_start}>{t("btn_start")}</button>
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default Section;
