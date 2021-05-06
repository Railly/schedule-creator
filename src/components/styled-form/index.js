import styled from 'styled-components'
import { Link } from 'react-router-dom' 
import { theme } from '../../themes'

export const StyledForm = styled.form`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin: 0 2.5em;
  margin-bottom: 1.25em;
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
  color: ${props => props.inputColor || 'palevioletred'};
  width: 12em;
  background-color: papayawhip;
  border: none;
  border-radius: 3px;
`

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  Input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    height: 28px;
    text-align:right;
  }

  span {
    background-color: papayawhip;
    display: block;
    color: ${props => props.inputColor || 'palevioletred'};
    margin-top: 0.8438em;
    padding-top: 1.83px;
    padding-right: 5px;
    height: 1.75em;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }

  span:first-child{
    padding-top:1.5px;
  }
`
export const Span = styled.span`
  position: absolute;
  background-color: papayawhip;
  width: 40px;
  height: 20px;
  text-align: center;
  vertical-align: top;
  top: 0.9375em;
  right: 1.5625em;
  border-radius: 3px;
`
