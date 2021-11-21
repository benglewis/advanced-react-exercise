import { useContext, useState } from "react";

import { setValue, ThemeContext } from "./App";

const opMap = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

export default () => {
  const theme = useContext(ThemeContext);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [op, setOp] = useState("");
  const setEventA = setValue(setA);
  const setEventB = setValue(setB);
  const setEventOp = setValue(setOp, false);
  const result = opMap[op] ? opMap[op](a, b) : "unknown";

  return (
    <div style={{ color: theme === "dark" ? "yellow" : "blue" }}>
      <h1>Magical calculator</h1>
      <input type="number" value={a} onChange={setEventA} />
      <select name="op" onChange={setEventOp}>
        <option value="">--Please choose an option--</option>
        {Object.keys(opMap).map((op) => (
          <option value={op} key={op}>
            {op}
          </option>
        ))}
      </select>
      <input type="number" value={b} onChange={setEventB} />
      <p>Result is {result}</p>
    </div>
  );
};
