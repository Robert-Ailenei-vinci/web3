/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
 
import { useEffect, useState } from 'react'

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
    return (
        <button onClick={props.handleClick}>
            {props.text}
        </button>
    )
}

const Loading = () => {
    return (
        <h3>Loading...</h3>
    )
}

const StatsAll = (props) => {
    const { Good, Neutral, Bad, Somme } = props;
    let all = Good + Neutral + Bad;

    if (all === 0) {
        return (
            <h3>No feedback yet</h3>
        )
    }

    const pourcent = (Good / all) * 100;
    const moyenne = Somme / all;

    return (
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
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [somme, setSomme] = useState(0);
  const [loading, setLoading] = useState(true); // Add loading state

  // Effect to handle loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 3 seconds
    }, 3000);

    // Cleanup timer if component is unmounted
    return () => clearTimeout(timer);
  }, []);

  const handleGood = () => {
    setGood(good + 1);
    setSomme(somme + 1);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handleBad = () => {
    setBad(bad + 1);
    setSomme(somme - 1);
  };

  if (loading) {
    // Display the Loading component while loading is true
    return <Loading />;
  }

  return (
    <div>
      <Titl />
      <Button handleClick={handleGood} text="Good" />
      <Button handleClick={handleNeutral} text="Neutral" />
      <Button handleClick={handleBad} text="Bad" />

      <StatsTitl />
      <StatsAll Good={good} Neutral={neutral} Bad={bad} Somme={somme} />
    </div>
  )
}

export default App;
