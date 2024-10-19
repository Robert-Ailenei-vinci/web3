/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { CountersContext } from './contexts/countersContext';

const GoodButton = () => {
  const { increaseGood } = useContext(CountersContext);

  return <button onClick={increaseGood}>Good</button>;
};

export default GoodButton;