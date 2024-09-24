import { useState } from "react";
import './ColorBox.css'; // Vous pouvez définir les styles ici

const ColorBox = () => {
  // Cycle des couleurs
  const colors = ["red", "green", "blue", "yellow", "purple"];

  // État pour gérer la couleur courante
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  // Gestionnaire pour passer à la couleur suivante
  const handleColorChange = () => {
    setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  // Déterminer la couleur actuelle et la prochaine
  const currentColor = colors[currentColorIndex];
  const nextColor = colors[(currentColorIndex + 1) % colors.length];

  return (
    <div className="color-box" style={{ backgroundColor: currentColor }}>
      <button onClick={handleColorChange}>
        {nextColor}
      </button>
      <p>{currentColor}</p>
    </div>
  );
};

export default ColorBox;
