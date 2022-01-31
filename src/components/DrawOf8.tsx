import { Fragment, useState, useEffect } from "react";
import { getBinaryToDecimal, getBinaryToHex, formatHexVal } from "./../services/converter"

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
    onChange(getBinaryToDecimal(arr));
    setFinal(arr);
  };


  useEffect(() => {
    const arr = [0, 0, 0, 0, 0, 0, 0, 0];
    setFinal(arr);
  }, []);

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
                        <td key={"hd8" + index} className={index > 3 ? "nibble" : "dark nibble"}>
                          {8 - index - 1}
                        </td>
                      );
                    })}
                  </tr>
                  <tr>
                    {final.map((val: number, index) => {
                      return (
                        <td key={"data8" + index}
                          className={index === 0 ? "sign" : "fraction"}
                          onClick={() => onClickElement(val, index)}
                        >
                          {val}
                        </td>
                      );
                    })}
                  </tr>
                </tbody>
              </table>
            </td>
            <td className="zerox-col">
              <span className="zerox">&nbsp;&nbsp;=&nbsp;&nbsp;</span>
            </td>
            <td className="zerox-col"><span className="zerox">{formatHexVal(getBinaryToHex(final), 2)}</span></td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <td>&nbsp;&nbsp;=&nbsp;&nbsp;</td>
            <td><span className="zerox">{getBinaryToDecimal(final)}</span></td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
};

export default DrawOf8;
