import Alta from "./pages/Alta";
import Carrito from "./pages/Carrito";
import ReactDOM from 'react-dom/client'
import Inicio from "./pages/Inicio.jsx";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React, { useContext } from 'react';
import DarkModeContext from './contexts/DarkModeContext';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FontContext from "./contexts/FontContext";

const Rooter = () => {

  const {mode} = useContext(DarkModeContext)
  const {font} = useContext(FontContext)

  return (
    <div className={`rooter rooter__${mode}-mode rooter__font-${font}`}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio/>}></Route>
          <Route path="/alta" element={<Alta/>}></Route>
          <Route path="/nosotros" element={<Nosotros/>}></Route>
          <Route path="/contacto" element={<Contacto/>}></Route>
          <Route path="/carrito" element={<Carrito/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default Rooter