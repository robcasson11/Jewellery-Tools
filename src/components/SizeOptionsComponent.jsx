import React from "react";

const SizeOptions = ({ type }) => {
  return type.map((value) => {
    return (
      <option key={value} value={value}>
        {value}
      </option>
    );
  });
};

export default SizeOptions;
