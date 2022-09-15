import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";

const Searching = ({ setSearching }) => {
  const [state, setState] = useState("");

  const handleCange = (e) => {
    setState(e.currentTarget.value);
  };
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearching(state);
    }, 500);
    return () => clearTimeout(timer);
  }, [setSearching, state]);
  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
      />
      <Button variant="outline-success" onChange={handleCange} value={state}>
        Search
      </Button>
    </Form>
  );
};
Searching.propTypes = {
  callback: PropTypes.func,
};
export default Searching;
