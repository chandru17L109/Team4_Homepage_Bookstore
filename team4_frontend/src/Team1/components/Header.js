import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Navbar, Nav, NavDropdown,Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../actions/userActions'
import { FaSignInAlt } from 'react-icons/fa'
// import { FaStar } from "react-icons/fa";


const Headers = () => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const dispatch = useDispatch()

  const logoutHandler = () => {
    console.log('logout')
    dispatch(logout())
  }

  return (
    <header>
      <Navbar expand='lg' collapseOnSelect>
        <Container>
     
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>

              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile Update</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    LogOut
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                            
                  <Nav.Link>
                      <Button className="btn btn-primary button2"> <FaSignInAlt/>  Sign Up </Button>
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Headers
