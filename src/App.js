import logo from './logo.svg';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <h1>CALCULATOR</h1>
      <div>
        <button className="square">AC</button>
        <button className="square">+/-</button>
        <button className="square">%</button>
        <button className="square">÷</button>
      </div>
      <div>
        <button className="square">7</button>
        <button className="square">8</button>
        <button className="square">9</button>
        <button className="square">x</button>
      </div>
      <div>
        <button className="square">4</button>
        <button className="square">5</button>
        <button className="square">6</button>
        <button className="square">-</button>
      </div>
      <div>
        <button className="square">1</button>
        <button className="square">2</button>
        <button className="square">3</button>
        <button className="square">+</button>
      </div>
      <div>
        <button className="rectangle">0</button>
        <button className="square">.</button>
        <button className="square">=</button>
      </div>
      <h2></h2>
    </div>
  );
}