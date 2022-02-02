import React, { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(0);
  const getData = () => {
    console.log("Value");
  };

  return (
    <div className="App">
      <h1>Please input your data here</h1>
      <input type="text" placeholder="Input Your data" required></input>
      <button type="submit" onClick={getData}>
        ADD
      </button>
    </div>
  );
}

export default App;
