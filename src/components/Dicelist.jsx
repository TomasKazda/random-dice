import Dicerow from '../components/Dicerow';

function Dicelist({dicerolls}) {
    return (
      <div className="rolls">
        {dicerolls.map((r, i) => 
            <li key={i}>
                {<Dicerow dicerow={r} />}
            </li>
        )}
      </div>
    );
  }
  
  export default Dicelist;