import { Fragment, useState } from "react";
import "./App.css";
import WeightInput from "./components/WeightInput";
import sizeConverter from "./functions/sizeConverter";
import sizeConversions from "./data/sizeConversionsData";

function App() {
  const [weightValues, setWeightValues] = useState({
    gold: "",
    plat: "",
    sil: "",
    wax: "",
  });

  const [sizeValues, setSizeValues] = useState("");

  const handleSizeConversion = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setSizeValues(sizeConverter(name, value));
  };

  return (
    <>
      <fieldset>
        <legend>Type in your value to the relevant input.</legend>
        {Object.entries(weightValues).map(([type, value]) => (
          <WeightInput
            key={type}
            type={type}
            value={value}
            values={weightValues}
            setValues={setWeightValues}
          />
        ))}
      </fieldset>
      <fieldset>
        <legend>Pick your ring size</legend>
        {sizeConversions.map((type) => {
          return (
            <Fragment key={type.name}>
              <label htmlFor="type">{type.name}</label>
              <br />
              <select
                id={type.name}
                name={type.name}
                value={type.data[sizeValues]}
                onChange={(e) => handleSizeConversion(e)}
              >
                <option value={type.data[sizeValues]}>
                  {type.data[sizeValues]}
                </option>

                {type.data.map((value) => {
                  return (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  );
                })}
              </select>
              <br />
            </Fragment>
          );
        })}
      </fieldset>
    </>
  );
}

export default App;
