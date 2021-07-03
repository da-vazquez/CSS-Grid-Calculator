import React, { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("");
  const [expression, setExpression] = useState([]);

  const handleClick = (value) => {
    setDisplay(value);
    setExpression([...expression, value]);
  };

  const handleResult = () => {
    let result = expression
      .join("")
      .split(/(\D)/g)
      .map((value) => (value.match(/\d/g) ? parseInt(value, 0) : value))
      .reduce((acc, value, index, array) => {
        switch (value) {
          case "+":
            return (acc = acc + array[index + 1]);
          case "-":
            return (acc = acc - array[index + 1]);
          case "x":
            return (acc = acc * array[index + 1]);
          case "÷":
            return (acc = acc / array[index + 1]);
          default:
            return acc;
        }
      });
    setDisplay(result);
    setExpression("");
  };

  const clearDisplay = () => {
    setDisplay("");
    setExpression([]);
    console.log("clearing...");
  };

  return (
    <div className="container">
      <div className="result-wrapper">
        {expression ? (
          <p>{expression}</p>
        ) : (
          <p className="result-p">{display}</p>
        )}
      </div>
      <div onClick={() => handleClick(1)} className="one">
        1
      </div>
      <div onClick={() => handleClick(2)} className="two">
        2
      </div>
      <div onClick={() => handleClick(3)} className="three">
        3
      </div>
      <div onClick={() => handleClick(4)} className="four">
        4
      </div>
      <div onClick={() => handleClick(5)} className="five">
        5
      </div>
      <div onClick={() => handleClick(6)} className="six">
        6
      </div>
      <div onClick={() => handleClick(7)} className="seven">
        7
      </div>
      <div onClick={() => handleClick(8)} className="eight">
        8
      </div>
      <div onClick={() => handleClick(9)} className="nine">
        9
      </div>
      <div onClick={() => handleClick(0)} className="zero">
        0
      </div>
      <div className="period">.</div>
      <div onClick={() => handleResult()} className="enter">
        enter
      </div>
      <div onClick={() => clearDisplay()} className="clear">
        C
      </div>
      <div onClick={() => handleClick("÷")} className="divide">
        ÷
      </div>
      <div onClick={() => handleClick("x")} className="multiply">
        x
      </div>
      <div onClick={() => handleClick("+")} className="add">
        +
      </div>
      <div onClick={() => handleClick("-")} className="subtract">
        -
      </div>
    </div>
  );
};

export default Calculator;
