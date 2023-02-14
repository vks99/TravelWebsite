import { NavLink,  } from 'react-router-dom';
import { Navbar, Nav,Container } from 'react-bootstrap';

const Navigation=()=>{
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
            </Container>
        </Navbar>
    </div>
    )
}

export default Navigation;