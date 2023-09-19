import Header from './components/Header';
import Inicio from './pages/Inicio';
import Proyectos from './pages/Proyectos';
import Habilidades from "./pages/Habilidades";
import Contacto from "./pages/Contacto";
import Footer from './components/Footer';
import { useState, useEffect } from 'react';


function App() {

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <Header setTheme={setTheme} theme={theme}/>
      <Inicio/>
      <Proyectos/>
      <Habilidades/>
      <Contacto/>
      <Footer/>
    </>
  )
}

export default App