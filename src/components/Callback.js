import React, { useCallback, useState } from 'react'
import Child from './Child'

function Callback() {

    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }

    const fun = useCallback(()=>{
        console.log("Hello Dipen!!"); 
        // eslint-disable-next-line
    }, [counterTwo])
    

    return (
        <div>
            <Child counterTwo={counterTwo}  setCounterTwo={setCounterTwo} fun={fun}/>
            <button onClick={incrementOne}>CounterOne - {counterOne}</button>
        </div>
    )
}

export default Callback
