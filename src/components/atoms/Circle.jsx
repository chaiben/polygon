import React from "react";

export default function Circle({ size = 60, color = "red" }) {
  return (
    <svg width={size} height={size}>
      <circle cx={size / 2} cy={size / 2} r={size / 2} fill={color} />
    </svg>
  );
}
