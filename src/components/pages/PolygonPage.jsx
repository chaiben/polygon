import { useEffect, useState } from "react";
import { Triangle, Square, Circle } from "../atoms";
import { PolygonTemplate } from "../templates";

import { allEqual } from "../../helpers";

export default function PolygonPage() {
  const [triangleSize, setTriangleSize] = useState(60);
  const [triangleColor, setTriangleColor] = useState("#0000ff");
  const [squareSize, setSquareSize] = useState(70);
  const [squareColor, setSquareColor] = useState("#ff0000");
  const [circleSize, setCircleSize] = useState(80);
  const [circleColor, setCircleColor] = useState("#00ffff");

  const elements = [
    {
      id: "triangle",
      label: "Triangle",
      size: triangleSize,
      setSize: setTriangleSize,
      color: triangleColor,
      setColor: setTriangleColor,
      children: <Triangle size={triangleSize} color={triangleColor} />,
    },
    {
      id: "square",
      label: "Square",
      size: squareSize,
      setSize: setSquareSize,
      color: squareColor,
      setColor: setSquareColor,
      children: <Square size={squareSize} color={squareColor} />,
    },
    {
      id: "circle",
      label: "Circle",
      size: circleSize,
      setSize: setCircleSize,
      color: circleColor,
      setColor: setCircleColor,
      children: <Circle size={circleSize} color={circleColor} />,
    },
  ];

  useEffect(() => {
    if (allEqual([triangleSize, squareSize, circleSize]))
      alert("All sizes are the same");
  }, [triangleSize, squareSize, circleSize]);

  useEffect(() => {
    if (allEqual([triangleColor, squareColor, circleColor]))
      alert("All colors are the same");
  }, [triangleColor, squareColor, circleColor]);

  return <PolygonTemplate elements={elements} />;
}
