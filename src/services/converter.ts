const getBinaryDecimal: any = (array: any): number => {
  return parseInt(array.join(""), 2);
};

const getBinaryHex: any = (array: any): number => {
  const desVal: any = parseInt(array.join(""), 2);
  return desVal.toString(16).toUpperCase();
};

const getDecimalBinary: any = (val: any): number => {
  return val.toString(2);
};

const getDecimalHexa: any = (val: any): number => {
  return val.toString(16);
};

const formatHexVal = (val: any, num: number): string => {
  try {
    return "0".repeat(num - val.length) + val;
  } catch (err) {
    console.log(err);
    return "0".repeat(num);
  }
};

export {
  getBinaryDecimal,
  getBinaryHex,
  getDecimalBinary,
  getDecimalHexa,
  formatHexVal,
};
