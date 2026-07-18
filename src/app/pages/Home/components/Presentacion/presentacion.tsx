import "./styles/presentacion.css";
import miFoto from "./imgs/yo.png";

const Presentacion = () => {
  return (
    <article className="presentacion">
      <div className="presentacion__informacion">
        <div className="informacion__cabecera">
          <h1 className="cabecera__titulo">
            Yaqueline <span className="cabecera__github">GH: Yaqui-Sieras</span>
          </h1>
          <h2 className="cabecera__subtitulo">Desarrolladora Full Stack</h2>
        </div>
        <div className="informacion__cuerpo">
          <p className="cuerpo__descripcion">
            Apasionada desarrolladora web con experiencia en la creación de
            aplicaciones y sitios web modernos y funcionales. Me especializo en
            tecnologías como React, TypeScript y CSS, y siempre estoy
            perfeccionando mis habilidades.
          </p>
        </div>
      </div>
      <picture className="presentacion__imagen">
        <img
          src={miFoto}
          alt="Foto de Yaqui Sieras"
          className="presentacion__foto"
        />
      </picture>
    </article>
  );
};

export default Presentacion;
