import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  height: 100%;
`

const Item = ({ data }) => {
  const colorBg = data !== undefined ? data.colorBg : '#C4C4C4'
  const colorFg = data !== undefined ? (data.colorFg ? '#fff' : '#000') : ''
  return (
    <div style={{ height: '100%', backgroundColor: `${colorBg}` }}>
      {data !== undefined ? (
        <p style={{ fontWeight: 'bold', color: `${colorFg}` }}>
          {data.subject}
        </p>
      ) : (
        <p></p>
      )}
    </div>
  )
}

export default Item
