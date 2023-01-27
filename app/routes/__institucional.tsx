import { NavLink, Outlet } from "@remix-run/react";

import { styled } from "~/config/stitches.config";

const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: 'LightSalmon',
  padding: '20px',
  boxShadow: '6px 4px 6px rgba(0,0,0,0.2)'
})

const Title = styled('h1', {
  fontSize: '1.8rem',
  fontWeight: 700,
  color: 'white'
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
    color: 'white',

    '&:hover': {
      backgroundColor: 'lightBlue',
      color: 'black',
    }
  },
  '.active': {
    backgroundColor: 'blue',
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