import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  const name = "Gani";
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>This is a JSX markup example in React.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
