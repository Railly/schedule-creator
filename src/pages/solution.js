import React from 'react'

const Solution = ({ history }) => {
  console.log(history)
  return (
    <h1>
      {history.location.state.allForms.slice(1).map(x => JSON.stringify(x))}
    </h1>
  )
}

export default Solution

