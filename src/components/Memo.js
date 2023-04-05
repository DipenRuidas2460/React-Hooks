import React, { useMemo, useState } from 'react'

function Memo() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    const isEven = useMemo(() => {
        console.warn(".............")
        let i = 0
        while (i < 20000000) {
            i++
        }
        return (counterOne % 2 === 0)
    }, [counterOne])

    return (
        <>
            <br /> <br />
            <button onClick={incrementOne}>CounterOne - {counterOne}</button>
            <br /> <br />
            <span>{isEven ? "Even" : "Odd"}</span>
            <br /> <br />
            <button onClick={incrementTwo}>CounterTwo - {counterTwo}</button>
        </>
    )
}

export default Memo
