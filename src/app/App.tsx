import { useExternalCss } from "./hooks/useExternalCss";
import "./App.css";

function App() {
  // Ejecutamos el hook pasándole las URLs
  useExternalCss({
    onlineUrl: "https://yaqui-sieras.github.io/miResetCSS/miReset.css",
    localUrl: "/css/miReset.css",
  });

  return (
    <>
      <header className="pag__cabecera"></header>
      <main className="pag__contenedor">
        <div className="pag__contenido">
          <h1 id="titulo" className="main__titulo">
            Hola soy Yaqui
          </h1>
        </div>
        <aside className="contenedor__sidebar"></aside>
      </main>
      <footer className="pag__pie">
        <p className="pie__texto">&copy; 2024 Yaqui-Sieras</p>
      </footer>
    </>
  );
}

export default App;
