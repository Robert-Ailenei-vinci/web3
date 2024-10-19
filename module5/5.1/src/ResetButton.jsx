/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { CountersContext } from './contexts/countersContext';

const ResetButton = () => {
  const { resetAll } = useContext(CountersContext);

  return <button onClick={resetAll}>Reset</button>;
};

export default ResetButton;