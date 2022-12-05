import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import FavouritesIndicator from "./FavouritesIndicator"
import { Link } from "react-router-dom"

function MainNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Get Employed</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="d-flex justify-content-between"
        >
          <Nav className="me-auto">
            <Link to="/">
              <div className="mr-2">Job Search</div>
            </Link>

            <Link to="/:companyName">
              <div>Company Search</div>
            </Link>
          </Nav>
          <Nav>
            <Link to="/favourites">
              <FavouritesIndicator />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MainNavbar
