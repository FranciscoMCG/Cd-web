import React from "react"
import styled from "styled-components"
import { Box, Flex, Card, Image, Heading, Text } from "rebass"
import logo from "../images/logo.svg"
import { Link as GatsbyLink } from "gatsby"

const Nav = styled(Box)`
  background: #3e4851;
  width: "100%";
`

const StyledLink = styled(GatsbyLink)`
  color: white;
  text-decoration: none;
`

const NavLogo = styled(Box)`
  display: flex;
  flex: 1;
  margin-left: 40px;
`

const NavLinks = styled(Heading)`
  align-items: center;
  margin-right: 40px;
  justify-content: flex-end;
`
const StyledUl = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
`

const StyledLi = styled.li`
  display: block;
  list-style-type: none;
  margin: 10px;
`

const menuResources = [
  { text: "sobre nós", to: "#" },
  { text: "serviços", to: "#" },
  { text: "contactos", to: "#" },
]

const Navbar = () => {
  return (
    <Nav>
      <Flex flexDirection="row">
        <NavLogo>
          <p>Logo</p>
        </NavLogo>
        <NavLinks>
          <StyledUl style={{ listStyleType: "none" }}>
            {menuResources.map(li => (
              <StyledLi key={li.text}>
                <StyledLink to={li.to}>{li.text}</StyledLink>
              </StyledLi>
            ))}
          </StyledUl>
        </NavLinks>
      </Flex>
    </Nav>
  )
}

export default Navbar
