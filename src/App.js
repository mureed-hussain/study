import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name);
    const data = { name };
    if (name) {
      setList((ls) => [...ls, data]);
      setName("");
    }
  };

  return (
    <div className="App">
      <h1>Dispaly Data</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Enter your Data"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>ADD</button>
      </form>

      {list.map((a) => (
        <div>
          <li>{a.name}</li>
        </div>
      ))}
    </div>
  );
};

export default App;
