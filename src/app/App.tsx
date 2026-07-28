import "./App.css";
import Header from "./components/Header/header.tsx";
import Footer from "./components/Footer/footer.tsx";
import Home from "./pages/Home/home.tsx";

function App() {
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
