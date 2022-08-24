import { faCake } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Container, Row, Col } from "reactstrap";

const categoryData = [
  {
    display: "Fastfood",
    imgUrl: "bread.png",
  },
  {
    display: "Pizza",
    imgUrl: "pizza.png",
  },

  {
    display: "Burger",
    imgUrl: "hamburger.png",
  },

  {
    display: "Dessert",
    imgUrl: "bread.png",
  },
];

const Category = () => {
  return (
    <Container>
      <Row>
        {categoryData.map((item, index) => (
          <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index}>
            <div className="category__item d-flex align-items-center gap-3">
              <div className="category__img">
                <img src={item.imgUrl} alt="category__item" />
              </div>
              <h6>{item.display}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
