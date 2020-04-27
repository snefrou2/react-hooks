import React, { useState } from "react";

function Counter() {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  // Déclare une fonction setCount qui permet de modifier la valeur de count
  const [count, setCount] = useState(0);

  //fonction pour changer le nombre de l'input
  //(Number(event.target.value)) précise que l'event doit obligatoirement être un nombre
  const handleChangeCount = (event) => {
    setCount(Number(event.target.value));
  };

  return (
    <div>
      <p>
        Le compteur est à :
        <input value={count} onChange={handleChangeCount} />
      </p>

      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  );
}

export default Counter;
