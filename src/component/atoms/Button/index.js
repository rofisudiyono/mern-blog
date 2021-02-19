import React from "react";
import { Button } from "react-bootstrap";
const Buton = ({ title, ...rest }) => {
  return (
    <Button variant="primary" {...rest}>
      {title}{" "}
    </Button>
  );
};

export default Buton;
