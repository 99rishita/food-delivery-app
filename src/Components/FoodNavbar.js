import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

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
        </Container>
      </Navbar>
    </>
  );
}

export default FoodNavbar;
