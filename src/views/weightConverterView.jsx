import React, { useState } from "react";
import WeightInput from "../components/WeightInputComponent";

const WeightConverterView = () => {
  const [weightValues, setWeightValues] = useState({
    gold: "",
    platinum: "",
    silver: "",
    wax: "",
  });

  return (
    <fieldset>
      <legend className="mb-5">
        In grams, type the weight into the relevant input.
      </legend>
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
