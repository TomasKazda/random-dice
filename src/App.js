import {useState, useCallback} from 'react';
import Setup from './components/Setup'
import Dicelist from './components/Dicelist';
import Dicerow from './components/Dicerow';
import './App.css';

function App() {
  const [dice, setDice] = useState([]);
  const [dicerolls, setDicerolls] = useState([]);

  const addDice = useCallback((sides) => {
    setDice([...dice, sides]);
  }, [dice]);

  const clearAllDice = () => setDice([]);

  const rollDice = ()=>{
    let newdr = JSON.parse(JSON.stringify(dicerolls));
    newdr.push(dice.map((v) => Math.floor((Math.random() * v) + 1)))
    setDicerolls(newdr);
  }

  return (
    <div className="App">{console.log(dice)}
      <Setup clearAll={clearAllDice} addDice={addDice} />
      <p><Dicerow dicerow={dice} /></p>
      <hr />
      <button onClick={rollDice}>Roll</button>
      <Dicelist dicerolls={dicerolls} />
    </div>
  );
}

export default App;
