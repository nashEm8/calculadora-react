import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState(0);
  const [operacao, setOperacao] = useState("Somar");

  const calcular = () => {
    if(num1 && num1 != ""){
      if(operacao == "Somar"){
        return parseFloat(num1) + parseFloat(num2);
      } else if(operacao == "Subtrair"){
        return parseFloat(num1) - parseFloat(num2);
      } else if(operacao == "Multiplicar"){
        return parseFloat(num1) * parseFloat(num2);
      } else {
        return parseFloat(num1) / parseFloat(num2);
      }
    }
  }

  const handleCalcular = () => {
    setResultado(calcular());
  }

  return (
    <div className="App">
      <h1>Calculadora <i class='bx bxs-calculator'></i>​</h1>
      <span>
      <label>Primeiro Número</label>
      <input 
        type="number" 
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder='Digite o primeiro número:'
      />

      <label>Segundo Número</label>
      <input 
        type="number" 
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder='Digite o segundo número:'
      />

      <div className='botao'>
      <select onChange={(e) => setOperacao(e.target.value)}>
        <option>Somar</option>
        <option>Subtrair</option>
        <option>Multiplicar</option>
        <option>Dividir</option>
      </select>
        <button onClick={handleCalcular}>Calcular</button>
      </div>

      <h4>O resultado é: {resultado}</h4>
      </span>
    </div>
  );
}

export default App;
