import React, { useState } from 'react'
import styled from 'styled-components'
import { StyledForm, Main, Button, ButtonWrapper, Div, Linker, Input } from '../components/styled-form'
import theme from '../themes'

const Select = styled.select`
  margin-top: 1em;
  padding: 0.5em;
  color: palevioletred;
  width: 12em;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`

const Form = () => {
  const [currentForm, setCurrentForm] = useState({

  })
  const [course, setCourse] = useState('')
  const [day, setDay] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  
  const handleNameChange = (e) => {
    setCourse(e.target.value)
  }

  const handleDayChange = (e) => {
    setDay(e.target.value)
  }
  
  const handleStartChange = (e) => {
    setStartTime(e.target.value)
  }

  const handleEndChange = (e) => {
    setEndTime(e.target.value)
  }
  
  console.log(typeof startTime)
  console.log(endTime)

return (
  <Main>
    <StyledForm>
      <span></span>
      <Div>
        <label>
          Curso:
          <Input
            type="text"
            name="course"
            onChange={(e) => handleNameChange(e)}
            required
          />
        </label>
      </Div>
      <Div>
        <label>
          Día:
          <Select name="day" onChange={(e) => handleDayChange(e)}>
            <option value="monday">Lunes</option>
            <option value="tuesday">Martes</option>
            <option value="wednesday">Miércoles</option>
            <option value="thursday">Jueves</option>
            <option value="friday">Viernes</option>
            <option value="saturday">Sábado</option>
            <option value="sunday">Domingo</option>
          </Select>
        </label>
      </Div>
      <Div>
        <label>
          Inicio:
          <Input
            type="time"
            name="course"
            onChange={handleStartChange}
            required
          />
        </label>
      </Div>
      <Div>
        <label>
          Fin:
          <Input
            type="time"
            name="course"
            onChange={handleEndChange}
            required
          />
        </label>
      </Div>
      <ButtonWrapper>
        <Button as={Linker} route="/" primary>
          Hecho
        </Button>
      </ButtonWrapper>
    </StyledForm>
  </Main>
);
}

export default Form
