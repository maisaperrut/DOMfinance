import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div style={{padding: "40px", fontFamily: "Arial"}}>
      <h1>DevFinance Online 🚀</h1>
      <p>Seu sistema está funcionando!</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
