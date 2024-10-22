
import logo from './logo.svg';
import './App.css';
import Jatekter from './components/Jatekter';
import { useContext } from 'react';
import { KattContext } from './context/KattContext';
function App() {
  /* itt akarjuk ahsználni a listát, useContext hook segítségével*/
  const {lista} = useContext(KattContext)

  return (
    <div className="App">
      <header className="App-header">
        <h1>TicTacToe</h1>
      </header>
      <article>
        <div className = "jatekter">
          
            <Jatekter lista = {lista} />
          
        </div>
      </article>
      <footer>Pfiffer Attila</footer>
    </div>
  );
}

export default App;
