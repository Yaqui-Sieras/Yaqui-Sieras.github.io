import "./styles/informacion.css";

const Informacion = () => {
  return (
    <div className="informacion">
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
  );
};

export default Informacion;
