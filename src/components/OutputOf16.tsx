import { Fragment, useState, useEffect } from "react";
import {
  getDecimalBinary,
  getDecimalHexa,
  formatHexVal,
  multiply
} from "./../services/converter";

interface Props {
  inputs: any;
  type?: any;
}
const OutputOf16 = ({ inputs }: Props) => {
  const [final, setFinal]: [Array<number>, any] = useState([]);

  useEffect(() => {
    const mul = multiply(inputs);
    const fn = getDecimalBinary(mul, 16);
    setFinal(fn);
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
            <span className="zerox">&nbsp;&nbsp;=&nbsp;&nbsp;</span>
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
