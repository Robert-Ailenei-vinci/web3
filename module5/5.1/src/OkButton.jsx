/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { CountersContext } from './contexts/countersContext';

const OkButton = () => {
  const { increaseOk } = useContext(CountersContext);

  return <button onClick={increaseOk}>Ok</button>;
};

export default OkButton;