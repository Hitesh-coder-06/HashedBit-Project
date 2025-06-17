import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleAddition = () => {
    setResult(Number(num1) + Number(num2));
  };

  const handleSubtraction = () => {
    setResult(Number(num1) - Number(num2));
  };

  const handleMultiplication = () => {
    setResult(Number(num1) * Number(num2));
  };

  const handleDivision = () => {
    if (Number(num2) === 0) {
      setResult('Cannot divide by zero');
    } else {
      setResult(Number(num1) / Number(num2));
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Simple Calculator</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
        style={{ marginRight: '10px' }}
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
      />
      <div style={{ marginTop: '20px' }}>
        <button onClick={handleAddition}>Add</button>
        <button onClick={handleSubtraction} style={{ marginLeft: '10px' }}>Subtract</button>
        <button onClick={handleMultiplication} style={{ marginLeft: '10px' }}>Multiply</button>
        <button onClick={handleDivision} style={{ marginLeft: '10px' }}>Divide</button>
      </div>
      <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
        Result: {result}
      </div>
    </div>
  );
};

export default Calculator;
