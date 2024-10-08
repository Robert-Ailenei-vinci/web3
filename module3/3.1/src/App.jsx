/* eslint-disable react/prop-types */
 
import { useState } from 'react'
const Titl = () => {
    return (
        <h1>give feedback</h1>
    )
}

const StatsTitl = () => {
    return (
        <h1>statistics</h1>
    )
}

const Button = (props) => {
    return(
    <button onClick={props.handleClick}>
        {props.text}
    </button>
    )
}




const StatsAll = (props) => {
    const {Good, Neutral, Bad, Somme} = props;
    let all=0;
    all=Good+Neutral+Bad;
    if(all === 0){
        return(
            <h3>No feedback yet</h3>
        )
    }
    const pourcent= (Good/all)*100 
    const moyenne= Somme/all;
    return(
        <div>
      <h3>Good: {Good}</h3>
      <h3>Neutral: {Neutral}</h3>
      <h3>Bad: {Bad}</h3>
      <h3>All: {Somme}</h3>
      <h3>Average: {moyenne.toFixed(2)}</h3>
      <h3>Positive feedback: {pourcent.toFixed(2)}%</h3>
    </div>
    )
}

const App = () => {
    
    
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [somme, setSomme] = useState(0);

  const handleGood = () => {
    const updatedGood = good+1;
    const updatedSomme = somme+1;
    setGood(updatedGood);
    setSomme(updatedSomme);
  }
  const handleNeutral = () => {
    const updatedNeutral = neutral+1;
    const updatedSomme = somme;
    setSomme(updatedSomme);
    setNeutral(updatedNeutral);
  }
  const handleBad = () => {
    const updatedSomme = somme-1;
    setSomme(updatedSomme);
    const updatedBad = bad+1;
    setBad(updatedBad);
  }

  return (
    
    <div>
        <Titl></Titl>
        <Button handleClick={()=> handleGood()} text="Good"/>
        <Button handleClick={()=> handleNeutral()} text="Neutral"/>
        <Button handleClick={()=> handleBad()} text="Bad"/>

        <StatsTitl/>
        <StatsAll  Good={good}  Neutral={neutral} Bad = {bad} Somme={somme}/>
    </div>
  )
}

export default App