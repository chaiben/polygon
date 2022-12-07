import React from "react";

export default function Form({ label, size, setSize, color, setColor }) {
  const changeSize = (e) => {
    setSize((prevSize) => {
      return isNaN(Number(e.target.value)) ? prevSize : Number(e.target.value);
    });
  };
  return (
    <div>
      <p>
        {label} size:
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
