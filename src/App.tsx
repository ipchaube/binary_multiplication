import React, {useState} from 'react';
import './App.css';
import DrawOf8 from './components/DrawOf8';
import OutputOf16 from './components/OutputOf16';

function App() {
  const [inputs, setInputs] = useState([0, 0]);
  const OnChangeInput1 = (val: any) => {
    const arr = [val, inputs[1]];
    setInputs(arr);
  }

  const OnChangeInput2 = (val: any) => {
    const arr = [inputs[0], val];
    setInputs(arr);
  }

  return (
    <div className="App">
      <header className="App-header">
        Multiplication of 8-bit binary
      </header>
      <section className='App-section'>
        <p>
          You are very welcome to the app. This app let you do "multiplication of two signed 8 bit integers to produce a 16 bit integer".
       </p>
       <p>
         Inputs are interactive where you provide input by clicking binary table.
       </p>
      </section>
      <section className='App-section'>
        <h2>Input A 8-bit-signed</h2>
        <DrawOf8 onChange={OnChangeInput1} />
      </section>
      <section className='App-section'>
        <h2>Input B 8-bit-signed</h2>
        <DrawOf8 onChange={OnChangeInput2} />
      </section>
      <hr />
      <section className='App-section'>
        <h2>Outpu 16-bit-signed</h2>
        <OutputOf16 inputs={inputs} />
      </section>
    </div>
  );
}

export default App;
