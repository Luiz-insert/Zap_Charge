import Header from "./components/Header"
import Loading from "./components/Loading"
import Button from "./components/Button"
import Title from "./components/Title"
import Main from "./components/Main"
import React, { useState, useEffect } from 'react';

function App () {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
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
      {loading}
      <Header />
      <Main />
    </div>
    )}
  </div>
  )
}

export default App