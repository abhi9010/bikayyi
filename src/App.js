import React from 'react'
import { useState } from 'react'
import './App.css';
export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);
  const handler = e => {
    setInput(e.target.value);
  }
  return (
    <div>
      <h2>Caluclator</h2>
      <center>
        <input type="text" placeholder="Enter Text" value={input} name="input" onChange={handler} /><br />
        <button onClick={() => setResult(eval(input))}>Res</button><br />
        <h3>Result is :{result}</h3>
        <button onClick={() => setInput(input + ' AC ')}>AC</button>
        <button onClick={() => setInput(input + ' +/- ')}> +/-</button>
        <button onClick={() => setInput(input + ' % ')}> % </button>
        <button onClick={() => setInput(input + ' / ')}> / </button>
        <br /><br />
        <button onClick={() => setInput(input + '7')}>7</button>
        <button onClick={() => setInput(input + '8')}>8</button>
        <button onClick={() => setInput(input + '9')}>9</button>
        <button onClick={() => setInput(input + ' *')}> * </button>
        <br /><br />


        <button onClick={() => setInput(input + '4')}>4</button>
        <button onClick={() => setInput(input + '5')}>5</button>
        <button onClick={() => setInput(input + '6')}>6</button>
        <button onClick={() => setInput(input + ' - ')}> -</button>
        <br /><br />

        <button onClick={() => setInput(input + '1')}>1</button>
        <button onClick={() => setInput(input + '2')}>2</button>
        <button onClick={() => setInput(input + '3')}>3</button>
        <button onClick={() => setInput(input + '+')}>+</button>
        <br /><br />
        <button onClick={() => setInput(input + '0')}>0</button>
        <button onClick={() => setInput(input + '.')}>.</button>
        <button onClick={() => setInput(input + '=')}>=</button>
        <button onClick={() => setInput('')}>clr</button>
      </center>

    </div>
  )
}
