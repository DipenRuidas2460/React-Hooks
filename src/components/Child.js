import React, { memo } from 'react'

function Child({counterTwo, setCounterTwo}) {
    console.log("Child Component Renders!!");
  return (
    <div>
      <h1>Child Component</h1>
    </div>
  )
}

export default memo(Child)
