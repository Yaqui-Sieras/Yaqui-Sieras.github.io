import "./styles/presentacion.css";
import Informacion from "./components/Informacion/informacion.tsx";
import Imagen from "./components/Imagen/imagen.tsx";

const Presentacion = () => {
  return (
    <article className="presentacion">
      <Informacion />
      <Imagen />
    </article>
  );
};

export default Presentacion;
