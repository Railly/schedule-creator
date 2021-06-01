import React from 'react'
import styled from 'styled-components'
import GridRow from '../components/gridRow'
import GridHeader from '../components/gridHeader'

const GridContainer = styled.div`
  background: #eee;
  display: grid;
  margin: 10px;
  grid-template-columns: repeat(8, 1fr);
  height: 100vh;
  gap: 0.25em;

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100%;
  }

  .time:nth-child(8n + 1) {
    font-weight: bold;
    background-color: #78d687;
    color: #eee;
  }
  .day {
    background-color: #2f2f2f;
    color: #fff;
  }
`

const Solution = ({ history }) => {
  const data = history.location.state.allForms.slice(1)
  return (
    <GridContainer>
      <GridHeader />
      <GridRow startTime="8:00" endTime="9:00" data={data} />
      <GridRow startTime="9:00" endTime="10:00" data={data} />
      <GridRow startTime="10:00" endTime="11:00" data={data} />
      <GridRow startTime="11:00" endTime="12:00" data={data} />
      <GridRow startTime="12:00" endTime="13:00" data={data} />
      <GridRow startTime="13:00" endTime="14:00" data={data} />
      <GridRow startTime="14:00" endTime="15:00" data={data} />
      <GridRow startTime="15:00" endTime="16:00" data={data} />
      <GridRow startTime="16:00" endTime="17:00" data={data} />
      <GridRow startTime="17:00" endTime="18:00" data={data} />
      <GridRow startTime="18:00" endTime="19:00" data={data} />
      <GridRow startTime="19:00" endTime="20:00" data={data} />
      <GridRow startTime="20:00" endTime="21:00" data={data} />
      <GridRow startTime="21:00" endTime="22:00" data={data} />
      <GridRow startTime="22:00" endTime="23:00" data={data} />
    </GridContainer>
  )
}

export default Solution
