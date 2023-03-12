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
                    <Nav.Link href="/Contactus">Contactus</Nav.Link>
                   
                {auth.isLoggedIn ? (
               <><Nav.Link href="/Destination">Destination</Nav.Link><Nav.Link href="/Blogs">Blogs</Nav.Link><Nav.Link href="/BlogForm">BlogForm</Nav.Link><Nav.Link href="/History">History</Nav.Link><button onClick={auth.logout}>Logout</button></>
              
      ) : (
        <><Nav.Link href="/Signup">Signup</Nav.Link><Nav.Link href='/Login'>Login</Nav.Link></>
        
      )}
      </Nav>
      
            </Container>
        </Navbar>
    </div>
    )
}

export default Navigation;