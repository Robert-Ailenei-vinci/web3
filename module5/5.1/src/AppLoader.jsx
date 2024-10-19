/* eslint-disable no-unused-vars */
import React from 'react';
import { ProviderWrapper as CountersProviderWrapper } from './contexts/countersContext';
import App from './App';

const AppLoader = () => {
  return (
    <CountersProviderWrapper>
      <App />
    </CountersProviderWrapper>
  );
};

export default AppLoader;