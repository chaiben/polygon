import React from 'react';

export default function Triangle ({size = 60, color = "red"}) {
  const triangle = `${size/2},0 0,${size*3**0.5/2} ${size},${size*3**0.5/2}`
  return (
    <svg width={size} height={size}>
        <polygon points={triangle} fill={color}></polygon>
    </svg>
  )
}
