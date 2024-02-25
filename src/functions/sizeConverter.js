import sizeConversions from "../data/sizeConversionsData";

const sizeConverter = (name, value) => {
  const result = sizeConversions.filter((type) => type.name === name);

  return result[0].data.indexOf(value);
};

export default sizeConverter;
