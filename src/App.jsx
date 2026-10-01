import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? "app dark" : "app light"}>
      <div className="container">
        <div className="header">
          <h1>useState Hook Task</h1>
          <button className="theme-btn" onClick={() => setIsDark(!isDark)}>
            {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
        <div className="card">
          <h2>Counter: {count}</h2>
          <p className="count-display">{count}</p>
          <div className="btn-group">
            <button className="btn decrement" onClick={() => setCount(count - 1)}>- Decrement</button>
            <button className="btn reset" onClick={() => setCount(0)}>Reset</button>
            <button className="btn increment" onClick={() => setCount(count + 1)}>+ Increment</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;