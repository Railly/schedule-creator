import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { theme } from '../../themes'

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 70vw;
  background-color: ${theme.yellow};
`
export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 8.3125em);
  background-color: ${theme.white};
`
export const Button = styled.button`
  display: flex;
  align-items: center;
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  padding: 0.5em;
  cursor: pointer;
`
export const ButtonWrapper = styled.div`
  margin: 1.3em 0;
`

export const Div = styled.div`
  display:flex;
  flex-direction: column;
  width: 10em;
  justify-content: space-around;
  margin-top: 1em;
`
export const Linker = props => (
  <Link to={props.route} style={{ textDecoration: 'none' }}>
    <Button {...props} children={props.children} />
  </Link>
)

export const Input = styled.input`
  margin-top: 0.5em;
  padding: 0.5em;
  color: ${props => props.inputColor || 'palevioletred'};
  width: 12em;
  background-color: papayawhip;
  border: none;
  border-radius: 3px;
`

export const Select = styled.select`
  margin-top: 1em;
  padding: 0.5em;
  color: palevioletred;
  width: 12em;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`

export const Span = styled.span`
  position: absolute;
  top: 0.9em;
  right: 1.6em;
  background-color: papayawhip;
  width: 2.5em;
  height: 1.5em;
  text-align: center;
  border-radius: 3px;
` 