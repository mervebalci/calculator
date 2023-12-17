import './App.css';
import { useState } from 'react';

export default function App() {
  const[result, setResult] = useState('0');

  function handleClick(value) {
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
    numbers.forEach((number) => {
      if (number === value) {
        setResult(number)
      } else {
        return null
      }
    })
  }
  return (
    <div className="App">
      <h1>CALCULATOR</h1>
      <div>
        <button className="square" id="AC" onClick={() => handleClick('AC')}>AC</button>
        <button className="square" id="+/-" onClick={() => handleClick('+/-')}>+/-</button>
        <button className="square" id="%" onClick={() => handleClick('%')}>%</button>
        <button className="square" id="÷" onClick={() => handleClick('÷')}>÷</button>
      </div>
      <div>
        <button className="square" id="7" onClick={() => handleClick('7')}>7</button>
        <button className="square" id="8" onClick={() => handleClick('8')}>8</button>
        <button className="square" id="9" onClick={() => handleClick('9')}>9</button>
        <button className="square" id="x" onClick={() => handleClick('x')}>x</button>
      </div>
      <div>
        <button className="square" id="4" onClick={() => handleClick('4')}>4</button>
        <button className="square" id="5" onClick={() => handleClick('5')}>5</button>
        <button className="square" id="6" onClick={() => handleClick('6')}>6</button>
        <button className="square" id="-" onClick={() => handleClick('-')}>-</button>
      </div>
      <div>
        <button className="square" id="1" onClick={() => handleClick('1')}>1</button>
        <button className="square" id="2" onClick={() => handleClick('2')}>2</button>
        <button className="square" id="3" onClick={() => handleClick('3')}>3</button>
        <button className="square" id="+" onClick={() => handleClick('+')}>+</button>
      </div>
      <div>
        <button className="rectangle" id="0" onClick={() => handleClick('0')}>0</button>
        <button className="square" id="." onClick={() => handleClick('.')}>.</button>
        <button className="square" id="=" onClick={() => handleClick('=')}>=</button>
      </div>
      <h2>{result}</h2>
    </div>
  );
}