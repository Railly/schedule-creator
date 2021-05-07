import React from 'react'
import styled from 'styled-components'

const GridItem = styled.div`
  background-color: #e5e5e5;
`

const GridHeader = () => {
  return (
    <>
      <GridItem>
        <p className="day">Hora</p>
      </GridItem>
      <GridItem>
        <p className="day">Lunes</p>
      </GridItem>
      <GridItem>
        <p className="day">Martes</p>
      </GridItem>
      <GridItem>
        <p className="day">Miercoles</p>
      </GridItem>
      <GridItem>
        <p className="day">Jueves</p>
      </GridItem>
      <GridItem>
        <p className="day">Viernes</p>
      </GridItem>
      <GridItem>
        <p className="day">Sábado</p>
      </GridItem>
      <GridItem>
        <p className="day">Domingo</p>
      </GridItem>
    </>
  )
}

export default GridHeader
