/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { CountersContext } from './contexts/countersContext';
import GoodButton from './GoodButton';
import OkButton from './OkButton';
import BadButton from './BadButton';
import ResetButton from './ResetButton';

const App = () => {
  const { good, ok, bad } = useContext(CountersContext);

  return (
    <div>
      <h1>Vote de Satisfaction</h1>
      <p>Good: {good}</p>
      <p>Ok: {ok}</p>
      <p>Bad: {bad}</p>
      <GoodButton />
      <OkButton />
      <BadButton />
      <ResetButton />
    </div>
  );
};

export default App;