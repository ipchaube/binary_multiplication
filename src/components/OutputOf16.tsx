import { Fragment, useState, useEffect } from "react";
import {
  getDecimalBinary,
  getBinaryToHex,
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
        <tbody>
          <tr>
            <td>
              <table>
                <tbody>
                  <tr>
                    {final.map((val: number, index) => {
                      return (
                        <td
                          key={"hd16" + index}
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
                        <td key={"data16" + index} className={index === 0 ? "sign" : "fraction"}>{val}</td>
                      );
                    })}
                  </tr>
                </tbody>
              </table>
            </td>
            <td className="zerox-col">
              <span className="zerox">&nbsp;&nbsp;=&nbsp;&nbsp;</span>
            </td>
            <td className="zerox-col">
              <span className="zerox">
                {formatHexVal(getBinaryToHex(final), 4)}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <td>&nbsp;&nbsp;=&nbsp;&nbsp;</td>
            <td>
              <span className="zerox">{multiply(inputs)}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
};

export default OutputOf16;
