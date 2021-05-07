import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'
import { theme } from '../../themes'

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: ${theme.gray};
`

const Img = styled.img`
  width:5em;
  height:5em;
`
const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 11em;
  align-items: center;
  list-style-type: none;
  margin-right: 1em;
`
const Anchor = styled.a`
  text-decoration: none;
  color: ${theme.white};
`
const LinkRouter = styled(Link)`
  text-decoration: none;
  color: ${theme.white};
`

const Footer = styled.footer`
  text-align: center;
  padding: 1em 0;
  background: ${theme.gray};
  color: ${theme.white};
`

const Layout = ({ children }) => {
  return(
    <>
      <header>
        <Nav>
          <Img src={logo}/>
          <Ul>
            <li><LinkRouter to="/">Home</LinkRouter></li>
            <li><Anchor href="#">Repositorio</Anchor></li>
          </Ul>
        </Nav>
      </header>
      {children}
      <Footer>
       © Todos los derechos reservados 2021
      </Footer>
    </>
  )
}

export default Layout
