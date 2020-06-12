import React from 'react';
import './App.css';
import ImagesList from '../components/images-list'
import '../assets/fonts/LuloCleanOutlineBold.otf'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h2>Falando de emoções</h2>
      </header>
      <div className="App-description">
        <text>Todos os nossos sentimentos são importantes e têm algo a nos dizer, até os que parecem que não agradam. Eles nos fazem sermos quem somos, expressar o que gostamos e não gostamos e decidir nossas atitudes. Todo mundo sente, sabia? Então, pergunte para mamãe ou papai, qual dessas emoções eles sentiram hoje e clique para entender melhor sobre ela:</text>
      </div>
      <ImagesList />
    </div>
  );
}

export default App;
