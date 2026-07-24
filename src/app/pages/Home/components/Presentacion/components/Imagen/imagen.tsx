import "./styles/imagen.css";
import miFoto from "./imgs/yo.png";

const Imagen = () => {
  return (
    <figure className="imagen">
      <img src={miFoto} alt="Foto de Yaqui Sieras" className="imagen__foto" />
    </figure>
  );
};

export default Imagen;
