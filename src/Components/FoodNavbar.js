import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Food from "./Food";
import Foodcanvas from "./Foodcanvas";

function FoodNavbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand
            href="#home"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <img
              alt=""
              src="food-logo.webp"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
            Food App{" "}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/" style={{ color: "white" }}>
              Home
            </Nav.Link>
            <Nav.Link href="/food-items" style={{ color: "white" }}>
              Foods
            </Nav.Link>
            <Nav.Link href="#pricing" style={{ color: "white" }}>
              Contact
            </Nav.Link>
          </Nav>
          <img src="orange_cart.webp" height="30" width="30" />
        </Container>
      </Navbar>
    </>
  );
}

export default FoodNavbar;
