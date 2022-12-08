import React from "react";

// El componente se llama Form, pero no es un <form> de html.
// Este componente contiene 3 elementos, input[number], input[color] y label.
// Crear un componente para cada uno de ellos.
// Guardarlos en la carpeta atoms
// Crear un componente que agrupe los que necesites en /molecules
export default function Form({ label, size, setSize, color, setColor }) {
  const changeSize = (e) => {
    setSize((prevSize) => {
      return isNaN(Number(e.target.value)) ? prevSize : Number(e.target.value);
    });
  };
  return (
    <div>
      <p>
        {/* Label debería de ser un html <label> y tener htmlFor */}
        {label} size:
        {/* Input debería de tener id y name */}
        <input type="number" value={size} onChange={changeSize} />
        <br />
        {label} color:
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </p>
    </div>
  );
}
