import { useState } from "react";

function App() {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ name, age });
    setName("");
    setAge("");
    setSent(true);
  }

  return (
    <div>
      {sent ? <p>Enviado con éxito</p> : <div />}
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Name"
        />
        <input
          value={age}
          onChange={(event) => setAge(event.target.value)}
          type="number"
          placeholder="Age"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
