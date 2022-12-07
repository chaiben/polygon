import { useEffect, useState } from "react";
import { Triangle, Square, Circle, Form } from "./components";

function App() {
  const [triangleSize, setTriangleSize] = useState(60);
  const [triangleColor, setTriangleColor] = useState("#0000ff");
  const [squareSize, setSquareSize] = useState(70);
  const [squareColor, setSquareColor] = useState("#ff0000");
  const [circleSize, setCircleSize] = useState(80);
  const [circleColor, setCircleColor] = useState("#00ffff");

  const allEqual = (arr) => arr.every((v) => v === arr[0]);

  useEffect(() => {
    if (allEqual([triangleSize, squareSize, circleSize]))
      alert("All sizes are the same");
  }, [triangleSize, squareSize, circleSize]);

  useEffect(() => {
    if (allEqual([triangleColor, squareColor, circleColor]))
      alert("All colors are the same");
  }, [triangleColor, squareColor, circleColor]);

  return (
    <div className="App">
      <p>
        <Form
          label="Triangle"
          size={triangleSize}
          setSize={setTriangleSize}
          color={triangleColor}
          setColor={setTriangleColor}
        />
        <Triangle size={triangleSize} color={triangleColor} />
      </p>
      <p>
        <Form
          label="Square"
          size={squareSize}
          setSize={setSquareSize}
          color={squareColor}
          setColor={setSquareColor}
        />
        <Square size={squareSize} color={squareColor} />
      </p>
      <p>
        <Form
          label="Circle"
          size={circleSize}
          setSize={setCircleSize}
          color={circleColor}
          setColor={setCircleColor}
        />
        <Circle size={circleSize} color={circleColor} />
      </p>
    </div>
  );
}

export default App;
