import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [disable, setDisable] = useState(false);

  const onIncrease = () => setCounter((prev) => prev + 1);
  const onDecrease = () => setCounter((prev) => prev - 1);
  const onToggle = () => setDisable((prev) => !prev);

  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter">{counter}</h3>
      </header>
      <main>
        <div>
          <button
            data-testid="plus-button"
            onClick={onIncrease}
            disabled={disable}
          >
            z +
          </button>
          <button
            data-testid="minus-button"
            onClick={onDecrease}
            disabled={disable}
          >
            -
          </button>
        </div>
        <div>
          <button
            data-testid="on/off-button"
            style={{ backgroundColor: "blue" }}
            onClick={onToggle}
          >
            on/off
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
