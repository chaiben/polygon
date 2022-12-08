import { useEffect, useState } from "react";

import { allEqual } from "./helpers";
import { Triangle, Square, Circle } from "./components/atoms";
import { SizeColorForm } from "./components/molecules";

function App() {
  const [triangleSize, setTriangleSize] = useState(60);
  const [triangleColor, setTriangleColor] = useState("#0000ff");
  const [squareSize, setSquareSize] = useState(70);
  const [squareColor, setSquareColor] = useState("#ff0000");
  const [circleSize, setCircleSize] = useState(80);
  const [circleColor, setCircleColor] = useState("#00ffff");

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
      {/* Utilizar un parrafo (<p>) para contener un formulario no es adecuado, mejor usa un <div> */}
      <p>
        <SizeColorForm
          id="triangle"
          label="Triangle"
          size={triangleSize}
          setSize={setTriangleSize}
          color={triangleColor}
          setColor={setTriangleColor}
        />
        <br />
        <Triangle size={triangleSize} color={triangleColor} />
      </p>
      <p>
        <SizeColorForm
          id="square"
          label="Square"
          size={squareSize}
          setSize={setSquareSize}
          color={squareColor}
          setColor={setSquareColor}
        />
        <br />
        <Square size={squareSize} color={squareColor} />
      </p>
      <p>
        <SizeColorForm
          id="circle"
          label="Circle"
          size={circleSize}
          setSize={setCircleSize}
          color={circleColor}
          setColor={setCircleColor}
        />
        <br />
        <Circle size={circleSize} color={circleColor} />
      </p>
    </div>
  );
}

export default App;
