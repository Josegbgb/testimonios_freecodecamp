import estilos from "../css/Card.module.css";
import { useTranslation } from "react-i18next";

function Card() {
  const { t, i18n } = useTranslation(["welcome"]);
  const cartas = [
    {
      name: t("person1_name"),
      job: t("person1_job"),
      text: t("person1_text"),
      img: "/testimonios_freecodecamp/img1.png",
    },
    {
      name: t("person2_name"),
      job: t("person2_job"),
      text: t("person2_text"),
      img: "/testimonios_freecodecamp/img2.png",
    },
    {
      name: t("person3_name"),
      job: t("person3_job"),
      text: t("person3_text"),
      img: "/testimonios_freecodecamp/img3.png",
    },
  ];

  return (
    <div className={estilos.container}>
      {cartas.map((elemento) => (
        <div className={estilos.card}>
          <div className={estilos.card_img}>
            <img className={estilos.img} src={elemento.img} alt="" />
          </div>
          <div className={estilos.card_content}>
            <h2>{elemento.name}</h2>
            <h3>{elemento.job}</h3>
            <p>{elemento.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
