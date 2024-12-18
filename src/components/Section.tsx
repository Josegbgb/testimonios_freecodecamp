import estilos from "../css/Section.module.css";

function Section() {
  return (
    <section className={estilos.section}>
      <div id={estilos.padding_container}>
        <div id={estilos.container}>
          <h1 className={estilos.titulos}>Learn to code.</h1>
          <h1 className={estilos.titulos}>Build project.</h1>
          <h1 className={estilos.titulos}>Earn certifications.</h1>
          <h1 className={estilos.titulos}>All for free.</h1>
          <button id={estilos.btn_start}>Get started</button>
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default Section;
