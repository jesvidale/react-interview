// TASK 3

// This is a PR. Is there anything to discuss?

import React from 'react';

const FunctionalComponent = () => {
  let count = 0;
  const handleClick = () => {
    count++;
    // TODO: Mejorar el metodo para poder decrementar
  };
  return (
    <div>
      <h1>Contador {count}</h1>
      <button onClick={() => handleClick()}>Incrementar</button>
    </div>
  );
}

export default FunctionalComponent;