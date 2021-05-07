import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import {
  StyledForm,
  Main,
  Button,
  ButtonWrapper,
  Div,
  Input,
  Select,
  Span,
} from '../components/styled-form'

const Form = ({ history }) => {
  const maxNumberSubjects = Number(history.location.state.numberSubjects)
  const [allForms, setAllForms] = useState([0])
  const [form, setForm] = useState({})
  const [numberSubjects, setNumberSubjects] = useState(1)

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = e => {
    e.preventDefault()
    setAllForms([...allForms, { ...form }])
    setNumberSubjects(numberSubjects + 1)
    e.target.reset()
  }

  return (
    <Main>
      <StyledForm onSubmit={onSubmit}>
        <Span>{`${numberSubjects} / ${maxNumberSubjects}`}</Span>
        <Div>
          <label>
            Curso:
            <Input
              type="text"
              name="subject"
              onChange={e => handleChange(e)}
              required
            />
          </label>
        </Div>
        <Div>
          <label>
            <Select name="day" onChange={e => handleChange(e)}>
              <option value="default" hidden>Seleccione un día:</option>
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
              name="startTime"
              onChange={handleChange}
              required
            />
          </label>
        </Div>
        <Div>
          <label>
            Fin:
            <Input
              type="time"
              name="endTime"
              onChange={handleChange}
              required
            />
          </label>
        </Div>
        <ButtonWrapper>
          {numberSubjects !== maxNumberSubjects + 1 ? (
            <Button type="submit" primary>
              {numberSubjects === maxNumberSubjects ? 'Hecho' : 'Aceptar'}
            </Button>
          ) : (
            <Redirect
              to={{
                pathname: '/solution',
                state: {
                  allForms: allForms,
                },
              }}
            />
          )}
        </ButtonWrapper>
      </StyledForm>
    </Main >
  )
}

export default Form

