/* eslint-disable react/prop-types */
import { useState } from "react";

const ClickCounter = ({ masterMessage, messageHover }) => {
  const [count, setCount] = useState(0);
  const [hoverMessage, setHoverMessage] = useState("");

  // Fonction appelée quand la souris entre dans le bouton
  const handleMouseEnter = () => {
    setHoverMessage(messageHover);
  };

  // Fonction appelée quand la souris quitte le bouton
  const handleMouseLeave = () => {
    setHoverMessage("");
  };

  return (
    <div className="card">
      <button
        onClick={() => setCount((count) => count + 1)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        count is {count}
      </button>
      {hoverMessage && <p>{hoverMessage}</p>}
      
      {/* Affichage du message si le nombre de clics est supérieur ou égal à 10 */}
      {count >= 10 && <p>{masterMessage}</p>}
    </div>
  );
};

export default ClickCounter;
