import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, email };
    if (name && email) {
      setList((ls) => [...ls, data]);
      setName("");
      setEmail("");
    }
  };

  return (
    <div>
      <h1>Hello world</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button>ADD</button>
        {list.map((a) => (
          <div>
            <li>{a.name}</li>
            <li>{a.email}</li>
          </div>
        ))}
      </form>
    </div>
  );
};

export default App;
