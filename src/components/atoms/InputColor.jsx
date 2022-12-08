import React from "react";

// Debería llamarse InputColor
// Cambiar onChangeHandler por onChange
export default function InputNumber({ id, value = 0, onChangeHandler }) {
  return (
    <input
      id={id}
      name={id}
      type="color"
      value={value}
      onChange={onChangeHandler}
    />
  );
}
