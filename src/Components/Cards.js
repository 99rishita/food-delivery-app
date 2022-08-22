import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../Card.css";

function FoodCard() {
  const foodDetails = [
    {
      id: "1",
      foodItem: "Donut",
      description: "Refresh your mood with tasty Donuts!",
      imgName: "donut.jpg",
    },
    {
      id: "2",
      foodItem: "Pizza",
      description: "Refresh your mood with tasty italian Pizza!",
      imgName: "food-header.jpg",
    },
    {
      id: "3",
      foodItem: "Icecream",
      description: "Refresh your mood with tasty Icecream!",
      imgName: "choco.jpg",
    },
    {
      id: "4",
      foodItem: "Cheesecake",
      description: "Refresh your mood with tasty Cheesecake!",
      imgName: "cake.jpg",
    },
    {
      id: "5",
      foodItem: "Pudding",
      description: "Refresh your mood with tasty Pudding!",
      imgName: "drink.png",
    },
    {
      id: "6",
      foodItem: "Pancakes",
      description: "Refresh your mood with tasty Pancakes!",
      imgName: "pancake.jpg",
    },
  ];

  return (
    <>
      <div class="card-test">
        {foodDetails.map((item) => {
          return (
            <>
              <Card style={{ width: "18rem", marginBottom: "2rem" }}>
                <Card.Img
                  variant="top"
                  src={`${item.imgName}`}
                  style={{ height: "15rem", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{`${item.foodItem}`}</Card.Title>
                  <Card.Text>{`${item.description}`}</Card.Text>
                  <Button variant="primary">Add to Card</Button>
                </Card.Body>
              </Card>
            </>
          );
        })}
        {/* <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="donut.jpg" />
          <Card.Body>
            <Card.Title>Donuts!!</Card.Title>
            <Card.Text>Refresh your mood with Tasty Donuts!</Card.Text>
            <Button variant="primary">Have fun!</Button>
          </Card.Body>
        </Card> */}
      </div>
    </>
  );
}

export default FoodCard;
