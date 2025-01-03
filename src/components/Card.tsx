import { ReactNode } from "react";
import estilos from "../css/Card.module.css";

const cartas = [
  {
    name: "Shawn Wang in Singapore",
    job: "Software Engineer at Amazon",
    text: `"It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."`,
    img: "/testimonios_freecodecamp/img1.png",
  },
  {
    name: "Sarah Chima in Nigeria",
    job: "Software Engineer at ChatDesk",
    text: `"freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."`,
    img: "/testimonios_freecodecamp/img2.png",
  },
  {
    name: "Emma Bostian in Sweden",
    job: "Software Engineer at Spotify",
    text: `"I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."`,
    img: "/testimonios_freecodecamp/img3.png",
  },
];

interface Props {
  children: ReactNode;
}

function Card(props: Props) {
  const { children } = props;

  return children;
}

type CardBodyProps = {};

export function CardBody({}: CardBodyProps) {
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
