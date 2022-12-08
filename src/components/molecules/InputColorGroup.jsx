import React from "react";
import { Label, InputColor } from "../atoms/";

export default function InputColorGroup({ id, label, color, setColor }) {
  return (
    <>
      <Label htmlFor={`${id}_color`}>{label}</Label>
      <InputColor
        id={`${id}_color`}
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </>
  );
}
