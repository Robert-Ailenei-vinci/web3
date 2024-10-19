/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import {Context as AvisContext} from './contexts/countersContext';
const AvisDisplay = () => {
  const { avisPositifs, avisNeutres, avisNegatifs, setAvisPositifs, setAvisNeutres, setAvisNegatifs } = useContext(AvisContext);

  return (
    <div>
      <h2>Avis</h2>
      <p>Positifs: {avisPositifs}</p>
      <p>Neutres: {avisNeutres}</p>
      <p>Negatifs: {avisNegatifs}</p>
      <button onClick={() => setAvisPositifs(avisPositifs + 1)}>Ajouter Avis Positif</button>
      <button onClick={() => setAvisNeutres(avisNeutres + 1)}>Ajouter Avis Neutre</button>
      <button onClick={() => setAvisNegatifs(avisNegatifs + 1)}>Ajouter Avis Negatif</button>
    </div>
  );
};

export default AvisDisplay;