// TASK 4

// This is a PR. Is there anything to discuss?

import React, {useState} from 'react';

const FunctionalComponent = () => {
  const [items, setItems] = useState([]);

  const addItem = (item: string) => {
    const updateItems = items.push(item);
    setItems(updateItems);
  };
  
  const removeItem = (index: number) => {
    const updateItems = [...items];
    updateItems.splice(index, 1);
    setItems(updateItems);
  };

  return (
    <div>
      <h1>Lista de deseos</h1>
      <button onClick={() => addItem('Nuevo item')}>Agregar item</button>
      <ul>
        {items.map((item: any, index: any) => (
          <li key={index}>
            {item}
            <button onClick={removeItem(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FunctionalComponent;