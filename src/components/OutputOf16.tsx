import { Fragment, useState, useEffect } from "react";
import {
  getDecimalBinary,
  getDecimalHexa,
  formatHexVal,
} from "./../services/converter";

interface Props {
  inputs: any;
  type?: any;
}
const OutputOf16 = ({ inputs }: Props) => {
  const [final, setFinal]: [Array<number>, any] = useState([]);

  const multiply = (inputs: Array<number>): number => {
    return inputs[0] * inputs[1];
  };

  useEffect(() => {
    const valStr = getDecimalBinary(multiply(inputs));
    const arr = ("0".repeat(16 - valStr.length) + valStr).split("");
    setFinal(arr);
  }, [inputs]);

  return (
    <Fragment>
      <table>
        <tr>
          <td>
            <table>
              <tr>
                {final.map((val: number, index) => {
                  return (
                    <td
                      className={
                        [0, 1, 2, 3, 8, 9, 10, 11].includes(index)
                          ? "dark nibble"
                          : "nibble"
                      }
                    >
                      {16 - index - 1}
                    </td>
                  );
                })}
              </tr>
              <tr>
                {final.map((val: number, index) => {
                  return (
                    <td className={index === 0 ? "sign" : "fraction"}>{val}</td>
                  );
                })}
              </tr>
            </table>
          </td>
          <td className="zerox-col">
            <span className="zerox">&nbsp;&nbsp;=&nbsp;&nbsp;0x</span>
          </td>
          <td className="zerox-col">
            <span className="zerox">
              {formatHexVal(getDecimalHexa(multiply(inputs)), 4)}
            </span>
          </td>
        </tr>
      </table>
      <table>
        <tr>
          <td>&nbsp;&nbsp;=&nbsp;&nbsp;</td>
          <td>
            <span className="zerox">{multiply(inputs)}</span>
          </td>
        </tr>
      </table>
    </Fragment>
  );
};

export default OutputOf16;
