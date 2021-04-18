import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import logo from '../logo.svg'

const Header = () => {
  const location = useLocation()

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="/">
        <img
          src={ logo }
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="nav-bar" />
      <Navbar.Collapse id="nav-bar">
        <Nav variant="pills" className="mr-auto" activeKey={ location.pathname }>
          <Nav.Item>
            <Nav.Link href="/new">New</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/best">Best</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/ask">Ask</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/show">Show</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/job">Jobs</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header