import { NavLink,  } from 'react-router-dom';
import { Navbar, Nav,Container } from 'react-bootstrap';
import { useContext } from 'react';
import AuthContext, { AuthContextType } from '../context/AuthContext';

const Navigation=()=>{
    const auth = useContext(AuthContext) as AuthContextType;
    return(
        
      <div className='main-nav'>

        <Navbar bg='success' variant="dark"> 
            <Container>
                <Navbar.Brand href="/">TravelCation</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/Destination">Destination</Nav.Link>
                    <Nav.Link href="/Blogs">Blogs</Nav.Link>
                    <Nav.Link href="/BlogForm">BlogForm</Nav.Link>
                    <Nav.Link href="/History">History</Nav.Link>
                    <Nav.Link href="/Contactus">Contactus</Nav.Link>
                    

          
                    <Nav.Link href="/Signup">Signup</Nav.Link>
                </Nav>
                {auth.isLoggedIn ? (
          
          <button onClick={auth.logout}>Logout</button>
        
      ) : (
        
          <NavLink to='/Login'>Login</NavLink>
        
      )}
            </Container>
        </Navbar>
    </div>
    )
}
/*
{auth.isLoggedIn ? (
    <li>
      <button onClick={auth.logout}>Logout</button>
    </li>
  ) : (
    <li>
      <NavLink to='/Login'>Login</NavLink>
    </li>
  )}
  */
export default Navigation;