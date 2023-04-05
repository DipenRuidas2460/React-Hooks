import React, { useState } from 'react'

function StateTutorial() {
    const [input, setInput] = useState("Dipen")

    const onchange = (e) => {
        const newVal = e.target.value
        setInput(newVal)
    }
    return (
        <div>
            <h1>{input}</h1>
            <input type="text" value={input} placeholder='Type something' onChange={onchange} />
        </div>
    )
}

export default StateTutorial
