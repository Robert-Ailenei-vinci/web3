/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { CountersContext } from './contexts/countersContext';

const BadButton = () => {
  const { increaseBad } = useContext(CountersContext);

  return <button onClick={increaseBad}>Bad</button>;
};

export default BadButton;