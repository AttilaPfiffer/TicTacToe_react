import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Jatekter from './components/Jatekter';

function App() {
  // react state = leírja a program állapotát, ha a state-ben megadott változó értéke változik
  // akkor a react frissíti az oldal tartalmát azon a részén, amelyik a változótól függ.
  // state-létrehozása useState hook - speciális fgv, beállító fgv
  const [lista, setLista] = useState([" ", " ", "X", "O", " ", " ", "X", "O", " "])
  const [lepes, setLepes] = useState(0)
  function katt(adat) {
    // itt akarjuk lekezelni, hogy melyik elemre kattintottunk és mit írjunk a listába
    // stateket közvetlenül nem módosíthatjuk, csak beállító fgv-n keresztül
    // 1. csinálunk egy másolatot az adatról
    const slista = [...lista] // ne referenciát adjunk át, hanem másolatot készítünk

    // 2. a másolatot módosítjuk
    if (lepes % 2 == 0) {
        slista[adat] = "X"
    } else {
        slista[adat] = "O"
    }
    console.log(lepes)
    let sv = lepes
    sv++
    setLepes(sv);
    // setLepes(lepes + 1)
    console.log(lepes)
    // 3. másolatot értékül adjuk az eredetinek
    setLista([...slista])


    console.log(lista)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>TicTacToe</h1>
      </header>
      <article>
          <Jatekter lista = {lista} katt = {katt}/>

      </article>
      <footer>Pfiffer Attila</footer>
    </div>
  );
}

export default App;
