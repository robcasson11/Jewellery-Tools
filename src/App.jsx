import { useState } from "react";
import "./App.css";
import WeightInput from "./components/WeightInput";

function App() {
  const [values, setValues] = useState({
    gold: "",
    plat: "",
    sil: "",
    wax: "",
  });

  return (
    <fieldset>
      <legend>Type in your value to the relevant input.</legend>
      {Object.entries(values).map(([type, value]) => (
        <WeightInput
          key={type}
          type={type}
          value={value}
          values={values}
          setValues={setValues}
        />
      ))}
    </fieldset>
  );
}

export default App;
