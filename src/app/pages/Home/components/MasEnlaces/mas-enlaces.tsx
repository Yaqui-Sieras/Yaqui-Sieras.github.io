import "./styles/mas-enlaces.css";

const MasEnlaces = () => {
  return (
    <ul className="mas_enlaces">
      <li className="mas_enlaces__items">
        <a className="items__enlace">
          <span className="enlace__icon">💻</span>
          <span className="enlace__text">Proyectos</span>
        </a>
      </li>

      <li className="mas_enlaces__items">
        <a className="items__enlace">
          <span className="enlace__icon">💼</span>
          <span className="enlace__text">Porfolio</span>
        </a>
      </li>

      <li className="mas_enlaces__items">
        <a className="items__enlace">
          <span className="enlace__icon">📄</span>
          <span className="enlace__text">Descargar CV</span>
        </a>
      </li>

      <li className="mas_enlaces__items">
        <a className="items__enlace">
          <span className="enlace__icon">📩</span>
          <span className="enlace__text">Contactar</span>
        </a>
      </li>
    </ul>
  );
};

export default MasEnlaces;
