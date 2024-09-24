/* eslint-disable react/prop-types */
import { useState } from "react";

const ClickCounter = ({ masterMessage, messageHover }) => {
  const [count, setCount] = useState(JSON.parse(localStorage.getItem("count")));
  const [hoverMessage, setHoverMessage] = useState("");

  // Fonction appelée quand la souris entre dans le bouton
  const handleMouseEnter = () => {
    setHoverMessage(messageHover);
  };

  // Fonction appelée quand la souris quitte le bouton
  const handleMouseLeave = () => {
    setHoverMessage("");
  };

  const handleCount = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      localStorage.setItem("count", JSON.stringify(newCount)); // Mettre à jour le localStorage après la mise à jour du state
      return newCount;
    });
  };

  return (
    <div className="card">
      <button
        onClick={handleCount}
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
