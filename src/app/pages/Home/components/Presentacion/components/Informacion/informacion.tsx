import "./styles/informacion.css";

const Informacion = () => {
  return (
    <div className="informacion">
      <h1 className="info__titulo">Yaqueline</h1>
      <h2 className="info_subtitulo">Desarrolladora Full Stack</h2>

      <div className="info__enlaces">
        <a className="enlaces__items enlaces__github">GH: Yaqui-Sieras</a>
        <a className="enlaces__items enlaces__linkedin">IN: Yaqui-Sieras</a>
      </div>

      <p className="info__descripcion">
        Apasionada desarrolladora web con experiencia en la creación de
        aplicaciones y sitios web modernos y funcionales. Me especializo en
        tecnologías como React, TypeScript y CSS, y siempre estoy perfeccionando
        mis habilidades.
      </p>
    </div>
  );
};

export default Informacion;
