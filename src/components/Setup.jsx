
function Setup({clearAll, addDice}) {
  return (
    <div className="setup">
      <button onClick={() => clearAll()}>clear all</button>
      {[6, 10, 12, 20, 30].map((x,i)=>
        <button key={i} onClick={() => addDice(x)}>add {x}</button>
      )}
    </div>
  );
}

export default Setup;