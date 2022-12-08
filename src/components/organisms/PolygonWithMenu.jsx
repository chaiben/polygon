import React from "react";
import { InputNumberGroup, InputColorGroup } from "../molecules/";

export default function PolygonWithMenu({
  id,
  label,
  size,
  setSize,
  color,
  setColor,
  children,
}) {
  return (
    <div>
      <InputNumberGroup
        id={id}
        label={`${label} size:`}
        number={size}
        setNumber={setSize}
      />
      <br />
      <InputColorGroup
        id={id}
        label={`${label} color:`}
        color={color}
        setColor={setColor}
      />
      <br />
      {children}
    </div>
  );
}
