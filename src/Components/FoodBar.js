import React, { useState, useEffect } from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import "../Foodbar.css";

const FoodBar = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center">
            <h2
              style={{
                fontFamily: "'Josefin Sans', sans-serif",
                fontWeight: 600,
              }}
            >
              Popular Foods
            </h2>
          </Col>

          <Col lg="12">
            <div className="food__category d-flex align-items-center justify-content-center gap-4">
              <button className={"foodBtnActive"}>All</button>
              <button>
                <img src="hamburger.png" alt="" />
                Burger
              </button>

              <button>
                <img src="bread.png" alt="" />
                Pizza
              </button>

              <button>
                <img src="pizza.png" alt="" />
                Bread
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FoodBar;
