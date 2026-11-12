
import { useState } from "react";

function InputExample() {
  const [name, setName] = useState("");

  return (
    <div>
      <h3>Controlled Input Example</h3>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Your name: {name}</p>
    </div>
  );
}

export default InputExample;
