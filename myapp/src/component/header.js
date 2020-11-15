import { Button, NavDropdown, Navbar, FormControl, Form, Nav } from 'react-bootstrap';
import logo from '../Uploadfiles/image/cks.png';


function Headerfile() {
    return (
     
            <Navbar className="bgcolor" variant="dark" expand="lg">
                <Navbar.Brand href="/" className="logo" alt="logo5"><img className="d-inline-block align-top navlogo" src={logo} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" >
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/blog">Blogs</Nav.Link>
                        <NavDropdown title="MY-RESSUME" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/myprofile">My-profile</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Introduction</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="dark">Search</Button>
                    </Form>
                </Navbar.Collapse>

            </Navbar>
            

        
    );
}

export default Headerfile;
