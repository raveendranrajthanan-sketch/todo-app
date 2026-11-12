
import { useState } from "react";

function SubmitForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const cleanName = name.trim();

    if (cleanName === "") {
      setMessage("Please enter your name!");
      return;
    }

    setMessage(`Welcome, ${cleanName}!`);
    setName("");
  }

  return (
    <div>
      <h3>Form Submit Example</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      <p>{message}</p>
    </div>
  );
}

export default SubmitForm;
