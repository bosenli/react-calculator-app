import { useState } from 'react';
import './Calculator.css';

function Calculator () {


    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState(num1 + num2);



    const add = (e) => {
        e.preventDefault();
        setResult(num1 + num2)
    }
    const subtract = (e) => {
        e.preventDefault();
        setResult(num1 - num2)
    }
    const divide = (e) => {
        e.preventDefault();
        setResult(num1 / num2)
    }
    const multiply = (e) => {
        e.preventDefault();
        setResult(num1 * num2)
    }


    const resetInput =()=>{
        setNum1('');
        setNum2('');
        setResult('');
      }
    

    return (   
    <div className="container">

    <h1>Basic Calculator </h1>
    <br />

    <form className="form">
    <input type="number" placeholder="enter first number" name="num1" value={num1} onChange={e =>setNum1(+e.target.value)}/>

    <input type="number" placeholder="enter second number" name="num2" value={num2} onChange={e =>setNum2(+e.target.value)}/>
    <div className="button">
        <h4>Choose operand:</h4>
    <input className = "input" type="button" value="+" onClick={add} />
    <input className = "input" type="button" value="-" onClick={subtract} />
    <input className = "input" type="button" value="/" onClick={divide}/>
    <input className = "input" type="button" value="*" onClick={multiply}/>
    </div>

    <h1>{result}</h1>

    <button onClick={resetInput}>CLEAR</button>
  </form>

</div>
    )
}

export default Calculator

// function Calculator (){
//     return (
//         <div className="container">
//   <h1>Add with React!</h1>

//   <form className="add">
//     <input type="text" name="value1" />
//     <span>+</span>
//     <input type="text" name="value2" />
//     <span>=</span>
//     <h3>Addition results go here!</h3>
//   </form>
// </div>
//     )
// }

// export default Calculator;