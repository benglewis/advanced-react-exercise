import { lazy, Suspense, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [calculatorActive, setCalculator] = useState(false);
  const setCalculatorActive = () => setCalculator(true);
  const Calculator = lazy(
    () =>
      new Promise((resolve) =>
        setTimeout(() => resolve(import("./Calculator")), 1000)
      )
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={setCalculatorActive}>
            Open calculator
          </button>
        </p>
        <Suspense fallback={<p>Loading calculator...</p>}>
          {calculatorActive ? <Calculator /> : null}
        </Suspense>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
