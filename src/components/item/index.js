import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  height: 100%;
`

const Item = ({ data }) => {
  return (
    <Div>
      {data !== undefined ? <p>{JSON.stringify(data.subject)}</p> : <p></p>}
    </Div>
  )
}

export default Item
