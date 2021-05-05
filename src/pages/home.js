import React from 'react'
import { StyledForm, Main, Button, ButtonWrapper, Div, Linker, Input } from '../components/styled-form'

const Home = () => {
  return(
    <Main>
      <StyledForm>
        <Div>
        <label>
          Ciclo:
          <Input type="text" name="cicle" required/>
        </label>
        </Div>
        <Div>
        <label>
          N° de cursos:
          <Input type="number" min="1" max="8" name="number-courses" required/>
        </label>
        </Div>
        <ButtonWrapper>
          <Button as={Linker}  route="/form" primary>Siguiente</Button>
        </ButtonWrapper>
      </StyledForm>
    </Main>
  )
}

export default Home