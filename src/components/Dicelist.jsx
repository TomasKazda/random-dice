
function Dicelist({dicerolls}) {
    return (
      <div className="rolls">
        {dicerolls.map((r, i) => 
            <li key={i}>
                {r.map((v,j) => <span key={j}>{v};</span>)}
            </li>
        )}
      </div>
    );
  }
  
  export default Dicelist;