import { createContext, lazy, Suspense, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

export const ThemeContext = createContext("light");
export const setValue =
  (setter, number = true) =>
  (e) =>
    number ? setter(parseFloat(e.target.value)) : setter(e.target.value);

const Calculator = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("./Calculator")), 1000)
    )
);

const App = () => {
  const [calculatorActive, setCalculator] = useState(false);
  const [theme, setTheme] = useState("dark");
  const setCalculatorActive = () => setCalculator(true);
  const setThemeSelection = setValue(setTheme, false);

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <header
          className="App-header"
          style={{ background: theme === "light" ? "#fff" : "#000" }}
        >
          <img src={logo} className="App-logo" alt="logo" />
          <select value={theme} onChange={setThemeSelection}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
          <p style={{ color: theme === "dark" ? "white" : "black" }}>
            Hello Vite + React!
          </p>
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
    </ThemeContext.Provider>
  );
};

export default App;
