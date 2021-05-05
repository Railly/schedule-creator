import styled from 'styled-components'
import { Link } from 'react-router-dom' 
import { theme } from '../../themes'

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin: 0 2.5em;
  flex-direction: column;
  background-color: ${theme.yellow};
`
export const Main = styled.div`
  display: flex;
  height: calc(100vh - 100px);
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${theme.white}
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
  margin-top: 1rem;
`
export const Linker = props => (
  <Link to={props.route} style={{ textDecoration: 'none'}}>
    <Button {...props} children={props.children} />
  </Link>
)

export const Input = styled.input`
  margin-top: 1em;
  padding: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  width: 12em;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;