import React, { Fragment, useState } from "react";
import sizeConversions from "../data/sizeConversionsData";
import sizeConverter from "../functions/sizeConverter";
import SizeOptions from "../components/SizeOptionsComponent";

const SizeConverterView = () => {
  const [sizeValues, setSizeValues] = useState("");

  const handleSizeConversion = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setSizeValues(sizeConverter(name, value));
  };

  return (
    <fieldset>
      <legend className="mb-5">Pick your ring size</legend>
      {sizeConversions.map((type) => {
        return (
          <Fragment key={type.name}>
            <label htmlFor="type">{type.name}</label>
            <br />
            <select
              id={type.name}
              name={type.name}
              className="mb-4"
              value={type.data[sizeValues]}
              onChange={(e) => handleSizeConversion(e)}
            >
              <option value={type.data[sizeValues]}>
                {type.data[sizeValues]}
              </option>

              <SizeOptions type={type.data} />
            </select>
            <br />
          </Fragment>
        );
      })}
    </fieldset>
  );
};

export default SizeConverterView;
