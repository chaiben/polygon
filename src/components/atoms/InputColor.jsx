import React from "react";

export default function InputColor({ id, value = 0, onChange }) {
  return (
    <input id={id} name={id} type="color" value={value} onChange={onChange} />
  );
}
