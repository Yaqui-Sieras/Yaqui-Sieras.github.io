import "./styles/header.css";
import logo from "./imgs/logo-GithubPage.png";

const Header = () => {
  return (
    <header className="cabecera">
      <h1 className="cabecera__titulo_pag">
        <img className="logo" alt="Logo" src={logo} />
      </h1>
    </header>
  );
};

export default Header;
