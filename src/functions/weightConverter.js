import weightConversions from "../data/weightConversionsData";

const convertWeight = (type, number, values, setValues) => {
  //Type = meaterial, ie "Gold", Number = The weigth of that material that needs to be converted

  //Create a new object of all the materials who's values are to be returned
  const newValues = { ...values };

  //Set the "weight" of the value that has been provided to the weight/number that has been provided
  newValues[type] = number;

  //Loop over the array of conversions from the data file to find the given "type"
  for (const [otherType, multiplier] of Object.entries(
    weightConversions[type]
  )) {
    //calculate the converted value and assign it to a variable "newAmount"
    const newAmount = number * multiplier;
    //update the state of the values object with the calculated values
    newValues[otherType] = newAmount === 0 ? "" : newAmount.toFixed(2);
  }
  setValues(newValues);
};

export default convertWeight;
