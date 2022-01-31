const getBinaryToDecimal: any = (array: any): any => {
  try {
    if (array[0] === 1) {
      return "-" + negetiveBinaryToDecimal(array);
    }
    return parseInt(array.join(""), 2);
  } catch (err) {
    console.log(err);
  }
};

const negetiveBinaryToDecimal = (arr: any) => {
  let value = 0;
  const len = arr.length
  for (let i = 1; i < len - 1; i++) {
    value += ((arr[i] === 1) ? 0 : 1) * Math.pow(2, len - i - 1);
  }

  return value + ((arr[len - 1] === 0) ? 2 : 1);
}

const getBinaryToHex: any = (array: any): any => {
  let desVal: any = "0";
  if (array.length) {
    desVal = parseInt(array.join(""), 2);
    return (desVal >>> 0).toString(16).toUpperCase()
  }
  return "N/A";
};

const getDecimalBinary: any = (val: any, bits = 16): any => {
  if (val >= 0) {
    const binary = val.toString(2);
    return ("0".repeat(bits - binary.length) + binary).split("");
  } else {
    const binary = (val >>> 0).toString(2); //(parseInt(""+val.substring(1))).toString(2);
    return binary.substr(binary.length - 16).split("");
  }
};

const formatHexVal = (val: any, num: number): any => {
  try {
    let finalValue = "";
    let sign = "0x";
    finalValue = "0".repeat(num - val.length) + val;
    return sign + finalValue.toUpperCase();
  } catch (err) {
    console.log(err);
    return "0".repeat(num);
  }
};

const multiply = (inputs: any[]) => {
  return inputs[0] * inputs[1];
};

export {
  getBinaryToDecimal,
  getBinaryToHex,
  getDecimalBinary,
  formatHexVal,
  multiply,
};
