import conversions from "./data/conversions";

const convert = (type, number, values, setValues) => {
  //Type = meaterial, ie "Gold", Number = The weigth of that material that needs to be converted

  //Create a new object of all the materials who's values are to be returned
  const newValues = { ...values };

  //Set the "weight" of the value that has been provided to the weight/number that has been provided
  newValues[type] = number;

  for (const [otherType, multiplier] of Object.entries(conversions[type])) {
    const newAmount = number * multiplier;
    newValues[otherType] = newAmount === 0 ? "" : newAmount.toFixed(2);
  }
  setValues(newValues);
};

export default convert;
