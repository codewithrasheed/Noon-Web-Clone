import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import img1 from '../images/ae.svg';
import img2 from '../images/user_thin.svg';
import img3 from '../images/cart.svg';

function Navigation() {
  return (
    <Navbar className='navigationBar' expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={require("../images/noonLogo.png")} width="100px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <img src={img1} />
            <NavDropdown className='fw-bold' title="Deliver to Dubai" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Delivery Only to Dubai</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="w-100 srch">
            <Form.Control
              type="search"
              placeholder="What are you looking for?"
              className=" w-100 border-0"
              aria-label="Search"
            />
          </Form>
          <Nav className="my-lg-0 w-50 mx-5"
          navbarScroll>
          <Nav.Link href="  #action1"> العربية |</Nav.Link>
          <Nav.Link href="#action1"><b>Sign In <img src={img2} width="17px" /></b> |</Nav.Link>
          <Nav.Link href="#action1"><b>Cart <img src={img3} width="17px" /></b></Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;