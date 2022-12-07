import React from "react";

export default function Square({ size = 60, color = "red" }) {
  const square = `0,0 0,${size} ${size},${size} ${size},0`;
  return (
    <svg width={size} height={size}>
      <polygon points={square} fill={color}></polygon>
    </svg>
  );
}
