const getBinaryToDecimal: any = (array: any): any => {
  try {
    if (array[0] === 1) {
      const fn = [...array];
      fn.shift();
      const final = fn.map((val: any) => (val === 0 ? 1 : 0));
      final.push(0);
      return "-" + parseInt(final.join(""), 2);
    }
    return parseInt(array.join(""), 2);
  } catch (err) {
    console.log(err);
  }
};

const getBinaryToHex: any = (array: any): any => {
  let desVal: any = "0";
  if (array.length) {
    desVal = getBinaryToDecimal(array);
  }
  let sign = "";
  if (("" + desVal).charAt(0) === "-") {
    const arr = desVal.split("");
    arr.shift();
    desVal = arr.join("");
    desVal = getDecimalHexa(desVal);
    sign = "-";
  } else {
    desVal = getDecimalHexa(desVal);
  }
  return sign + desVal; //((desVal >>> 0).toString(16)).toUpperCase();
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

const getDecimalHexa: any = (val: any): any => {
  if (val >= 0) {
    return (val >>> 0).toString(16);
  }
  const mn = val.toString().substring(1);
  const hexa = "-" + (mn >>> 0).toString(16);
  return hexa;
};

const formatHexVal = (val: any, num: number): any => {
  try {
    let fn = "";
    let sign = "0x";
    const myChar = val.charAt(0);
    if (myChar === "-") {
      const newString = val.substring(1);
      sign = "-0x";
      fn = "0".repeat(num - newString.length) + newString;
    } else {
      fn = "0".repeat(num - val.length) + val;
    }
    return sign + fn.toUpperCase(); //"0x" + "0".repeat(num - val.length) + val;
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
  getDecimalHexa,
  formatHexVal,
  multiply,
};
