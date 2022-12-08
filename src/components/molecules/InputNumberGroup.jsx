import React from "react";
import { Label, InputNumber } from "../atoms/";

export default function InputNumberGroup({ id, label, number, setNumber }) {
  const changeNumber = (e) => {
    setNumber((prevNumber) => {
      return isNaN(Number(e.target.value))
        ? prevNumber
        : Number(e.target.value);
    });
  };
  return (
    <>
      <Label htmlFor={`${id}_number`}>{label}</Label>
      <InputNumber id={`${id}_number`} value={number} onChange={changeNumber} />
    </>
  );
}
