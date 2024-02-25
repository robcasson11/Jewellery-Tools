import React, { Fragment } from "react";
import convertWeight from "../functions/weightConverter";

const WeightInput = ({ type, value, values, setValues }) => {
  return (
    <Fragment key={type}>
      <label htmlFor="type">{type}</label>
      <br />
      <input
        title={type}
        value={value}
        onChange={(e) =>
          convertWeight(e.target.title, e.target.value, values, setValues)
        }
      />
      <br />
    </Fragment>
  );
};

export default WeightInput;
