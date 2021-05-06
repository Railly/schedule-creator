import React from 'react'
import styled from 'styled-components'
import data from '../data.json'

const Solution = ({ history }) => {
  //{history.location.state.allForms.slice(1).map(x => JSON.stringify(x))}

  return <>{data.map(x => JSON.stringify(x))}</>
}

export default Solution
