import React, {useState} from "react"
function CounterApp(){
    const[count, setcount]= useState(0);
    const increment=()=>{setcount(count+1)}
    const decrement=()=>{setcount(count-1)}
    const reset=()=>{setcount(0)}
    

    return(
        <div className="counter-container">
            <h1>Counter App</h1>
            <h2>{count}</h2>
            <div className="button-group">
                <button onClick={increment} className="increase">Increment</button>
                <button onClick={decrement} className="decrease">Decrement</button>
                <button onClick={reset} className="reset">Reset</button>
            </div>

        </div>
    )
}
export default CounterApp