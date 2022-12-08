import React from "react";

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
