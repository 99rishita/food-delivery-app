import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function FoodCard() {
  return (
    <>
      <div class="card-test">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="donut.jpg" />
          <Card.Body>
            <Card.Title>Donuts!!</Card.Title>
            <Card.Text>Refresh your mood with Tasty Donuts!</Card.Text>
            <Button variant="primary">Have fun!</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="donut.jpg" />
          <Card.Body>
            <Card.Title>Donuts!!</Card.Title>
            <Card.Text>Refresh your mood with Tasty Donuts!</Card.Text>
            <Button variant="primary">Have fun!</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="donut.jpg" />
          <Card.Body>
            <Card.Title>Donuts!!</Card.Title>
            <Card.Text>Refresh your mood with Tasty Donuts!</Card.Text>
            <Button variant="primary">Have fun!</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default FoodCard;
