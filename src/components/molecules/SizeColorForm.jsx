import React from "react";
import { Label, InputNumber, InputColor } from "../atoms/"

export default function SizeColorForm({ id, label, size, setSize, color, setColor }) {
  const changeSize = (e) => {
    setSize((prevSize) => {
      return isNaN(Number(e.target.value)) ? prevSize : Number(e.target.value);
    });
  };
  const sizeId = `${id}_size`
  const colorId = `${id}_color`
    return (
    <>
      <Label htmlFor={sizeId}>{label} size:</Label>
      <InputNumber id={sizeId} value={size} onChangeHandler={changeSize} />  
      <br />
      <Label htmlFor={colorId}>{label} color:</Label>
      <InputColor id={colorId} value={color} onChangeHandler={(e) => setColor(e.target.value)} />  
    </>
  );
}
