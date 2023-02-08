import { NavLink,  } from 'react-router-dom';
import { Navbar, Nav,Container } from 'react-bootstrap';

const Navigation=()=>{
    return(
      <div className='main-nav'>
      {/* <Navbar bg="success" expand="lg">
      <Navbar.Brand href="/">My Website</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto ">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Destination">Destination</NavLink>
          <NavLink to="/Blogs">Blogs </NavLink>
          <NavLink to="/History">History </NavLink>
          <NavLink to="/Contactus">Contactus</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar> */}

        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="/">TravelCation</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/Destination">Destination</Nav.Link>
                    <Nav.Link href="/Blogs">Blogs</Nav.Link>
                    <Nav.Link href="/History">History</Nav.Link>
                    <Nav.Link href="/Contactus">Contactus</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
    )
}

export default Navigation;