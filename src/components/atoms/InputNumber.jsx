import React from "react";

export default function InputNumber({ id, value = 0, onChange }) {
  return (
    <input id={id} name={id} type="number" value={value} onChange={onChange} />
  );
}
