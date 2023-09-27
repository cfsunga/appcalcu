import React from 'react';
import './App.css'; // You can create this CSS file to style your calculator layout.


function CalculatorLayout() {
  return (
    <div className="calculator-layout">
      <div className="display">0</div>
      <div className="button-row">
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>/</button>
      </div>
      <div className="button-row">
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>*</button>
      </div>
      <div className="button-row">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>-</button>
      </div>
      <div className="button-row">
        <button>0</button>
        <button>.</button>
        <button>=</button>
        <button>+</button>
      </div>
    </div>
  );
}
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide"></link>

export default CalculatorLayout;
