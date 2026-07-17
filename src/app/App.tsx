import { useExternalCss } from "./hooks/useExternalCss";
import "./App.css";
import Header from "./components/Header/header.tsx";
import Footer from "./components/Footer/footer.tsx";
import Home from "./pages/Home/home.tsx";

function App() {
  // Ejecutamos el hook pasándole las URLs
  useExternalCss({
    onlineUrl: "https://yaqui-sieras.github.io/miResetCSS/miReset.css",
    localUrl: "/css/miReset.css",
  });

  return (
    <>
      <Header />
      <main className="contenido">
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;
