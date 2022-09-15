import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

const ButtonComponent = ({ children, callback }) => {
  return (
    <Button bg="success" type="button" onClick={callback}>
      {children}
    </Button>
  );
};

ButtonComponent.propTypes = {
  children: PropTypes.any,
  callback: PropTypes.func,
};
export default ButtonComponent;
