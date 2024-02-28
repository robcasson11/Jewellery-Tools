import React, { useState } from "react";
import WeightInput from "../components/WeightInput";

const WeightConverterView = () => {
  const [weightValues, setWeightValues] = useState({
    gold: "",
    plat: "",
    sil: "",
    wax: "",
  });

  return (
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
  );
};

export default WeightConverterView;
