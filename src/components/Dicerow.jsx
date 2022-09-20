
function Dicerow({dicerow}) {
    return (
      <>
        {dicerow.map((r, i) => <span key={i}>{r};</span>)}
      </>
    )
  }
  
  export default Dicerow;