import { Fragment, useState, useEffect } from "react";
import {getBinaryDecimal, getBinaryHex, formatHexVal} from "./../services/converter"

interface Props {
  onChange: any;
  type?: any;
}
const DrawOf8 = ({ onChange, type }: Props) => {
  const [final, setFinal]: [Array<number>, any] = useState([]);

  const onClickElement = (val: number, index: number) => {
    console.log("i am here");
    let arr = [];
    arr = [...final];
    arr[index] = val === 1 ? 0 : 1;
    onChange(getBinaryDecimal(arr));
    setFinal(arr);
  };


  useEffect(() => {
    const arr = [0, 0, 0, 0, 0, 0, 0, 0];
    setFinal(arr);
  }, []);

  return (
    <Fragment>
      <table>
        <tr>
          <td>
            <table>
              <tr>
                {final.map((val: number, index) => {
                  return (
                    <td className={index > 3 ? "nibble" : "dark nibble"}>
                      {8 - index - 1}
                    </td>
                  );
                })}
              </tr>
              <tr>
                {final.map((val: number, index) => {
                  return (
                    <td
                      className={index === 0 ? "sign" : "fraction"}
                      onClick={() => onClickElement(val, index)}
                    >
                      {val}
                    </td>
                  );
                })}
              </tr>
            </table>
          </td>
          <td className="zerox-col">
            <span className="zerox">&nbsp;&nbsp;=&nbsp;&nbsp;0x</span>
          </td>
          <td className="zerox-col"><span className="zerox">{formatHexVal(getBinaryHex(final), 2)}</span></td>
        </tr>
      </table>
      <table>
        <tr>
          <td>&nbsp;&nbsp;=&nbsp;&nbsp;</td>
          <td><span className="zerox">{getBinaryDecimal(final)}</span></td>
        </tr>
      </table>
    </Fragment>
  );
};

export default DrawOf8;
