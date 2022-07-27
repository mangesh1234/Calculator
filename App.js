import { useState} from 'react'

function App() {
  const [cal, setCal] = useState("");
  const [result, setResult] = useState("");
  
  const operator = ['/', '*', '-', '+', '.'];
  
  const updateValue = value =>{
    
    if(operator.includes(value) && cal === '' || operator.includes(value) && operator.includes(cal.slice(-1))){
      return;
    }
    setCal(cal + value);
    if(!operator.includes(value)){
      setResult(eval(cal + value).toString())
    }
  }
  
  const createDigits = () =>{
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateValue(i.toString())} key={i}>{i}</button>
      )
    }
    return digits;
  }

  const calculate = () => {
    setCal(eval(cal).toString())
  }

  const deleteList = () => {
    if(cal === ''){
      return;
    }
    const value = cal.slice(0, -1);
    setCal(value);
  }
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {cal ? <span>{result}</span> : ''}{cal || '0'}
        </div>
        <div className="operator">
          <button onClick={() => updateValue('/')}>/</button>
          <button onClick={() => updateValue('*')}>*</button>
          <button onClick={() => updateValue('+')}>+</button>
          <button onClick={() => updateValue('-')}>-</button>
          <button onClick={deleteList}>DEL</button>
        </div>
        <div className="digits">
          { createDigits() }
          <button onClick={() => updateValue('/')}>0</button>
          <button onClick={() => updateValue('.')}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
