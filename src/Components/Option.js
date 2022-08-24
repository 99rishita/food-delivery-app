import React from "react";
import Form from "react-bootstrap/Form";

const Option = () => {
  return (
    <div>
      {" "}
      <Form>
        {["checkbox"].map((type) => (
          <div key={`default-${type}`} className="mb-3">
            <Form.Check
              type={type}
              id={`default-${type}`}
              label={`default ${type}`}
            />

            {/* <Form.Check
              disabled
              type={type}
              label={`disabled ${type}`}
              id={`disabled-default-${type}`}
            /> */}
          </div>
        ))}
      </Form>
    </div>
  );
};

export default Option;
