import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
const Input = ({ label, ...rest }) => {
  return (
    <InputGroup className="mb-3">
      <FormControl
        aria-label={label}
        aria-describedby="basic-addon1"
        {...rest}
      />
    </InputGroup>
  );
};

export default Input;
