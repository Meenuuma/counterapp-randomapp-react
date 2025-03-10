import React, { useState } from "react";

const Random = () => {
    const [random, setRandom] = useState(null)

    const generateRandom = () => {


        const newRandomNum = (Math.floor(Math.random() * 100) + 1)
        setRandom(newRandomNum)

    }

const resetNumber = ()=>{
    setRandom(null);
}


    return (
        <div className="random-container">
            <h1>Random Number Generator</h1>
            <h2>{random !== null ? random : "click to generate a number"}</h2>
            <p>Random Number:{random}</p>
            <button onClick={generateRandom}>Generate Random Number</button>
            <button onClick={resetNumber} className="reset-button" >Reset</button>
        
        </div>
    )
}
export default Random