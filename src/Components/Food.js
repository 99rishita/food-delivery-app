import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "../App.css";

const Food = () => {
  return (
    <div className="food-container">
      <div className="food-left-container">
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="I want to order..."
            className="me-2"
            aria-label="Search"
            style={{ borderColor: "black" }}
          />
          {/* <Button variant="outline-success">I want to order...</Button> */}
        </Form>
      </div>
      <div className="food-right-container">
        <DropdownButton
          id="dropdown-basic-button"
          style={{ width: "100%" }}
          title="Select Cuisine"
        >
          <Dropdown.Item href="#/action-1">North-Indian</Dropdown.Item>
          <Dropdown.Item href="#/action-2">South-Indian</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Italian</Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
};

export default Food;
