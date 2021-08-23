import { useState } from "react";
import Stepper from "./components/Stepper/";
import "./App.scss";

function App() {
  const [value, setValue] = useState(2);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="App">
      <div className="App-header">
        <h3> Set number of steps:</h3>
        <select
          id="selector"
          className="steps-select"
          value={value}
          onChange={handleChange}
        >
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <Stepper countSteps={value} />
    </div>
  );
}

export default App;
