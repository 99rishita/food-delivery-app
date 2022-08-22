import Button from "react-bootstrap/Button";

function OrderButton() {
  return (
    <>
      {/* <Button variant="primary" size="lg" active>
        Primary button
      </Button>{' '} */}
      {/* <Button variant="secondary" size="lg" active>
        Order Now
      </Button> */}
      <Button variant="dark" style={{ width: "25%", margin: "0 15px 0 0" }}>
        Order Now
      </Button>
      &nbsp;
      <Button variant="info" style={{ width: "25%", margin: 0 }}>
        What to Order
      </Button>{" "}
    </>
  );
}

export default OrderButton;
