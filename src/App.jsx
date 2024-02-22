import { useState } from "react";
import "./App.css";
import WeightInput from "./WeightInput";

// const conversions = {
//   gold: {
//     plat: 1.66,
//     sil: 0.9,
//     wax: 0.071,
//   },
//   plat: {
//     gold: 0.6,
//     sil: 0.48,
//     wax: 0.049,
//   },
//   sil: {
//     gold: 1.11,
//     plat: 2.06,
//     wax: 0.097,
//   },
//   wax: {
//     gold: 14.1,
//     plat: 20.6,
//     sil: 10.3,
//   },
// };

function App() {
  const [values, setValues] = useState({
    gold: "",
    plat: "",
    sil: "",
    wax: "",
  });

  // const convert = (type, number) => {
  //   //Type = meaterial, ie "Gold", Number = The weigth of that material that needs to be converted

  //   //Create a new object of all the materials who's values are to be returned
  //   const newValues = { ...values };

  //   //Set the "weight" of the value that has been provided to the weight/number that has been provided
  //   newValues[type] = number;

  //   for (const [otherType, multiplier] of Object.entries(conversions[type])) {
  //     const newAmount = number * multiplier;
  //     newValues[otherType] = newAmount === 0 ? "" : newAmount.toFixed(2);
  //   }
  //   setValues(newValues);
  // };

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
        /* <Fragment key={type}>
          <label htmlFor="type">{type}</label>
          <br />
          <input
            title={type}
            value={value}
            onChange={(e) =>
              convert(e.target.title, e.target.value, values, setValues)
            }
          />
          <br />
        </Fragment>  */
      ))}
    </fieldset>
  );
}

export default App;
