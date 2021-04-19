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
            <Nav.Link href="/story/new/1">New</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/story/best/1">Best</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/story/ask/1">Ask</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/story/show/1">Show</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/story/job/1">Jobs</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header