/* eslint-disable no-unused-vars */
import { useState } from 'react'
import React from 'react';
import './App.css';
import ColorBox from './ColorBox';

function App() {
  return (
    <div className="App">
      <h1>Color Box Changer</h1>
      <ColorBox />
      <ColorBox />
      <ColorBox />
    </div>
  );
}

export default App;
