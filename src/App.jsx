import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/header";
import Inicio from "./pages/Inicio/inicio";
import LivrosDoados from "./pages/LivrosDoados/livros_doados";
import QueroDoar from "./pages/QueroDoar/quero_doar"
import "./GlobalStyle/global.scss"

export default function App() {
  return (
    <BrowserRouter>
      <Header/>

      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/livrosDoados" element={<LivrosDoados/>}/>
        <Route path="/queroDoar" element={<QueroDoar/>}/>
      </Routes>
    </BrowserRouter>
  );
}
