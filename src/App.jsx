import { BrowserRouter, Route, Routes } from "react-router-dom"
import Loading from "./components/Loading"
import React, { useState, useEffect } from 'react';
import Concat from "./concat"
import About from "./components/Product01"
import Product01 from "./components/Product01";

function App () {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simule uma requisição assíncrona aqui
    // Por exemplo, usando uma API ou um setTimeout
    // Quando a requisição for concluída, defina setLoading(false)
    // para exibir o conteúdo real
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        // Se estiver carregando, exibe a tela de loading
        <div>
          <Loading />
        </div>
      ) : (
        // Se o conteúdo estiver carregado, exibe o conteúdo real
        <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Concat />} />
            <Route path="/product01" element={<Product01 />} />
          </Routes>
        </BrowserRouter>
      </div>


      )}
    </div>
  )
}

export default App