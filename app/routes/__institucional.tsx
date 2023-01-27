import { NavLink, Outlet } from "@remix-run/react";

import { styled } from "~/config/stitcjes.config";

const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: 'LightSalmon',
  padding: '20px'
})

const Title = styled('h1', {
  fontSize: '1.5rem'
})

const Menu = styled('ul', {
  margin: '0',
  padding: '0',
  display: 'flex',
  columnGap: '5px',
  listStyle: 'none',
})

const MenuItem = styled('li', {
  'a': {
    textDecoration: 'none',
    fontSize: '1.3rem',
    padding: '10px 15px',
    borderRadius: '4px',

    '&:hover': {
      backgroundColor: 'lightBlue',
      color: 'white'
    }
  },
  '.active': {
    backgroundColor: 'blue',
    color: 'white'
  }
})

const Content = styled('main', {
  marginTop: '20px',
  padding: '0 20px'
})

export default function() {
  return (
    <>
      <Header>
        <Title>Nosso site</Title>
        <nav>
          <Menu>
            <MenuItem>
              <NavLink to="home">Home</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to="servicos">Serviços</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to="sobre">Sobre</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to="/quotes">C.R.U.D</NavLink>
            </MenuItem>
          </Menu>
        </nav>
      </Header>

      <Content>
        <Outlet />
      </Content>
    </>
  )
}