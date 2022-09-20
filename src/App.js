import {useState, useCallback} from 'react';
import Setup from './components/Setup'
import Dicelist from './components/Dicelist';
import './App.css';

function App() {
  const [dices, setDices] = useState([]);
  const [dicerolls, setDicerolls] = useState([[3,5,6], [2, 2, 1], [3, 3, 6, 6]]);

  const addDice = useCallback((sides) => {
    setDices([...dices, sides]);
  }, [dices]);

  const clearAllDices = () => setDices([]);


  return (
    <div className="App">{console.log(dices)}
      <Setup clearAll={clearAllDices} addDice={addDice} />
      <hr />
      <Dicelist dicerolls={dicerolls} />
      <button onClick={()=>{
        let newdr = JSON.parse(JSON.stringify(dicerolls));
        newdr.push(dices)
        setDicerolls(newdr);
      }}>Roll</button>
    </div>
  );
}

export default App;
