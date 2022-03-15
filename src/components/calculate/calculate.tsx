import { ChangeEvent, useState } from "react";

interface ItestInterface {
    name:string;
    age:number
}

export default function Calculate(props: ItestInterface) {

    let x = 17
    let y = "4"

     const [counter, setCounter] = useState(0);

     const [firstNumber, setFirstNumber] = useState(0);

     const [secondNumber, setSecondNumber] = useState(0);

     const [result, setResult] = useState(0);


    function changeCounter(){
        setCounter(counter +1)
    }

    function setValueOfFirstNumber(e: ChangeEvent<HTMLInputElement>){
        setFirstNumber(parseInt(e.target.value));
    }

    function setValueOfSecondNumber(e: ChangeEvent<HTMLInputElement>){
        setSecondNumber(parseInt(e.target.value))
    }

    function calculateNumbers(){
        setResult(firstNumber + secondNumber)
    }
    

    return (<>
        <div>
            <h1>här är summan av dina bägge tal: {result} </h1>
            <h2>dina två tal är: tal-ett: {firstNumber} och taltvå: {secondNumber}</h2>
            <input type="text" placeholder="nummer 1" onChange={setValueOfFirstNumber} value={firstNumber}/>
            <input type="text" placeholder="nummer 2" onChange={setValueOfSecondNumber} value={secondNumber}/>
            <button onClick={calculateNumbers}>Beräkna</button>
        </div>
        <div>Resultaten kommer hit sen, testar variabler {x} {y} och testar lite mer {x+Number(y)}</div>
        <div>testar props/värde från förälder {props.age} och {props.name}</div>
        <br />
        <br />
        <br />
        <div>
            <h1>Här nedan testar jag övning dag2 - state och events</h1>
            <div>
                <button onClick={changeCounter}>öka counter med 1</button>
            </div>
            <div>counter är: {counter}</div>
        </div>
    </>)
}