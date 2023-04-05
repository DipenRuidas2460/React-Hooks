import React, { useEffect } from 'react'

function Counter1({ number }) {

    useEffect(() => {
        console.log("Function Mounting!!");

        return () => {
            console.log("Functional Componet : remove");
        }

    }, [number])

    return (
        <div>
            <h1>{number}</h1>
        </div>
    )
}

export default Counter1
