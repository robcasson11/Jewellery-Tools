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
        type="number"
        className="mb-4 w-10 text-center"
        //onWheel prevents this input value from being changed via the scroll wheel on a mouse
        onWheel={(event) => event.currentTarget.blur()}
        onChange={(e) =>
          convertWeight(e.target.title, e.target.value, values, setValues)
        }
      />
      <br />
    </Fragment>
  );
};

export default WeightInput;
