import "./styles/home.css";
import Presentacion from "./components/Presentacion/presentacion.tsx";
import MasEnlaces from "./components/MasEnlaces/mas-enlaces.tsx";

const Home = () => {
  return (
    <section className="home">
      <Presentacion />
      <MasEnlaces />
    </section>
  );
};

export default Home;
