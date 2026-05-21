import { useState } from "react";

function AcronymGenerator() {
  const [input, setInput] = useState("");
  const [acronym, setAcronym] = useState("");

  function toAcronym(text) {
    // Implement acronym logic here
    const result = text
      .split(" ")
      .filter((word) => word.length > 0)
      .map((word) => word[0].toUpperCase())
      .join("");

    console.log("res", result);
    return result;
  }

  const handleClick = () => {
    setAcronym(toAcronym(input));
  };

  return (
    <div>
      <h1>Acronym Generator</h1>
      <p>
        An acronym is formed by taking the first letter of each word in a phrase
        and converting them to uppercase.
      </p>

      <div>
        <input
          type="text"
          value={input}
          placeholder="Enter a phrase..."
          onChange={(e) => setInput(e.target.value)}
          data-testid="input"
        />
        <button onClick={handleClick} data-testid="generate-button">
          Generate
        </button>
        <p data-testid="result">Result : {acronym}</p>
      </div>
    </div>
  );
}
export default AcronymGenerator;
