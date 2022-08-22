import React, { useState, useEffect } from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import "../Serve.css";

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: "service-01.png",
    desc: "Easy way to make an order. Just grab your phone and order your food.",
  },

  {
    title: "Super Dine In",
    imgUrl: "service-02.png",
    desc: "Easy way to make reservations. Just grab your phone and make your reservation.",
  },
  {
    title: "Easy Pick Up",
    imgUrl: "service-03.png",
    desc: "Easy take away service is available. Just grab your phone and order your food.",
  },
];

const Serve = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center">
            {/* <h4 className="feature__subtitle mb-4">What we serve</h4> */}
            <h2 className="feature__title">Just sit back at home</h2>
            <h2 className="feature__title">
              we will <span>take care</span>
            </h2>
          </Col>

          {featureData.map((item, index) => (
            <Col lg="4" md="6" sm="6" key={index} className="mt-5">
              <div className="feature__item text-center px-5 py-3">
                <img
                  src={item.imgUrl}
                  alt="feature-img"
                  className="w-25 mb-3"
                />
                <h5 className=" fw-bold mb-3">{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Serve;
