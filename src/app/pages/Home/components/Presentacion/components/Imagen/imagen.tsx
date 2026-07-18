import "./styles/imagen.css";
import miFoto from "./imgs/yo.png";

const Imagen = () => {
  return (
    <picture className="imagen">
      <img src={miFoto} alt="Foto de Yaqui Sieras" className="imagen__foto" />
    </picture>
  );
};

export default Imagen;
