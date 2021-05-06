import React, { useState } from 'react'
import { StyledForm, Main, Button, ButtonWrapper, Div, Linker, Input } from '../components/styled-form'

const Home =({ history }) => {
  const [info, setInfo] = useState({})

  const handleChange = e => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    })
  }
  
  const onSubmit = (e) => {
    e.preventDefault()
    history.push('/form', {...info})
  }

  return(
    <Main>
      <StyledForm onSubmit={onSubmit}>
        <Div>
        <label>
          Ciclo:
          <Input type="text" name="semester"  onChange={handleChange} required/>
        </label>
        </Div>
        <Div>
        <label>
          N° de cursos:
          <Input type="number" name="numberSubjects" min="1" max="8" onChange={handleChange}  required/>
        </label>
        </Div>
        <ButtonWrapper>
          <Button type='submit' primary>Siguiente</Button>
        </ButtonWrapper>
      </StyledForm>
    </Main>
  )
}

export default Home